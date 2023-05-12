// SPDX-License-Identifier: AGPL-3.0-or-later

pragma solidity 0.8.17;

import {PluginUUPSUpgradeable, IDAO} from "@aragon/osx/core/plugin/PluginUUPSUpgradeable.sol";
import {IPool} from "@aave/core-v3/contracts/interfaces/IPool.sol";
import {ICreditDelegationToken} from "@aave/core-v3/contracts/interfaces/ICreditDelegationToken.sol";
import {IERC20} from "@openzeppelin/contracts/interfaces/IERC20.sol";

contract CreditDelegator is PluginUUPSUpgradeable {
    address public poolAddress;

    function initialize(IDAO _dao, address _poolAddress) external initializer {
        __PluginUUPSUpgradeable_init(_dao);
        poolAddress = _poolAddress;
    }

    function supply(address _asset, uint256 _amount) external {
        IERC20(_asset).approve(poolAddress, _amount);
        IERC20(_asset).transferFrom(msg.sender, address(this), _amount);
        IPool(poolAddress).supply(_asset, _amount, address(this), 0);
        address aTokenAddress = IPool(poolAddress)
            .getReserveData(_asset)
            .aTokenAddress;

        uint256 atokenBalance = IERC20(aTokenAddress).balanceOf(address(this));
        IERC20(aTokenAddress).approve(address(dao()), atokenBalance);

        dao().deposit(aTokenAddress, atokenBalance, "");
    }

    function borrow(
        address _asset,
        uint256 _amount,
        uint256 _interestRateMode,
        uint16 _referralCode,
        address _onBehalfOf
    ) external {
        IDAO.Action[] memory actions = new IDAO.Action[](1);

        actions[0] = IDAO.Action({
            to: poolAddress,
            value: 0 ether,
            data: abi.encodeWithSelector(
                bytes4(
                    keccak256("borrow(address,uint256,uint256,uint16,address)")
                ),
                _asset,
                _amount,
                _interestRateMode,
                _referralCode,
                _onBehalfOf
            )
        });

        dao().execute({_callId: "", _actions: actions, _allowFailureMap: 0});
    }

    function approveDelegation(
        address _asset,
        address _delegatee,
        uint256 _amount
    ) external {
        IDAO.Action[] memory actions = new IDAO.Action[](1);

        actions[0] = IDAO.Action({
            to: _asset,
            value: 0 ether,
            data: abi.encodeWithSelector(
                bytes4(keccak256("approveDelegation(address,uint256)")),
                _delegatee,
                _amount
            )
        });

        dao().execute({_callId: "", _actions: actions, _allowFailureMap: 0});
    }

    function getCollateral(
        address _token,
        uint256 _amount,
        address _to
    ) external {
        IDAO.Action[] memory actions = new IDAO.Action[](2);

        actions[0] = IDAO.Action({
            to: _token,
            value: 0 ether,
            data: abi.encodeWithSelector(
                bytes4(keccak256("approve(address,uint256)")),
                address(this),
                _amount
            )
        });

        actions[1] = IDAO.Action({
            to: _token,
            value: 0 ether,
            data: abi.encodeWithSelector(
                bytes4(keccak256("transfer(address,uint256)")),
                _to,
                _amount
            )
        });

        dao().execute({_callId: "", _actions: actions, _allowFailureMap: 0});
    }
}
