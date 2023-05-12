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

}
