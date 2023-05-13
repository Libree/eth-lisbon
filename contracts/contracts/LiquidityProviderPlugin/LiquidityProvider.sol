// SPDX-License-Identifier: AGPL-3.0-or-later

pragma solidity 0.8.17;

import {PluginUUPSUpgradeable, IDAO} from "@aragon/osx/core/plugin/PluginUUPSUpgradeable.sol";
import {IERC20} from "@openzeppelin/contracts/interfaces/IERC20.sol";
import {ILiquidityManager} from "./ILiquidityManager.sol";

contract LiquidityProvider is PluginUUPSUpgradeable {
    address public uniswapLiquidityManager;

    bytes32 public constant MINT_POSITION_PERMISSION_ID =
        keccak256("MINT_POSITION_PERMISSION");

    function initialize(
        IDAO _dao,
        address _uniswapLiquidityManager
    ) external initializer {
        __PluginUUPSUpgradeable_init(_dao);
        uniswapLiquidityManager = _uniswapLiquidityManager;
    }

    function mintNewPosition(
        address _token0Address,
        address _token1Address,
        uint256 _token0Amount,
        uint256 _token1Amount,
        int24 _minPrice,
        int24 _maxPrice
    )
        external
        auth(MINT_POSITION_PERMISSION_ID)
        returns (uint _tokenId, uint128 liquidity, uint amount0, uint amount1)
    {
        return
            ILiquidityManager(uniswapLiquidityManager).mintNewPosition(
                _token0Address,
                _token1Address,
                _token0Amount,
                _token1Amount,
                _minPrice,
                _maxPrice
            );
    }

    function collectAllFees()
        external
        returns (uint256 amount0, uint256 amount1)
    {
        return ILiquidityManager(uniswapLiquidityManager).collectAllFees();
    }
}
