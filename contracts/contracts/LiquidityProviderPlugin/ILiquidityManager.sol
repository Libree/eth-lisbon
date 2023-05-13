// SPDX-License-Identifier: AGPL-3.0-or-later

pragma solidity 0.8.17;

interface ILiquidityManager {
    function mintNewPosition(
        address _token0Address,
        address _token1Address,
        uint256 _token0Amount,
        uint256 _token1Amount,
        int24 _minPrice,
        int24 _maxPrice
    )
        external
        returns (uint _tokenId, uint128 liquidity, uint amount0, uint amount1);

    function collectAllFees()
        external
        returns (uint256 amount0, uint256 amount1);
}
