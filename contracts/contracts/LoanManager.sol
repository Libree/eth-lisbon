pragma solidity 0.8.17;

import {IERC20} from "@openzeppelin/contracts/interfaces/IERC20.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import {CreditDelegator} from "./CreditDelegationPlugin/CreditDelegator.sol";

contract LoanManager {
    using Counters for Counters.Counter;

    struct Loan {
        address owner;
        address pluginAddress;
        address collateralAddress;
        address principalAddress;
        uint256 amountCollateral;
        uint256 amountPrincipal;
        uint256 duration;
        uint256 status;
    }

    Counters.Counter public totalLoans;
    mapping(uint256 => Loan) public loans;

    function createLoan(
        address owner,
        address pluginAddress,
        address collateralAddress,
        address principalAddress,
        uint256 amountCollateral,
        uint256 amountPrincipal,
        uint256 duration
    ) external {
        uint256 loanId = totalLoans.current();
        totalLoans.increment();

        loans[loanId] = Loan(
            owner,
            pluginAddress,
            collateralAddress,
            principalAddress,
            amountCollateral,
            amountPrincipal,
            duration,
            0
        );
    }

    function acceptLoan(
        address _buyer,
        address _pluginAddress,
        uint256 _loanId
    ) external {
        Loan memory loan = loans[_loanId];
        CreditDelegator(loan.pluginAddress).getCollateral(
            loan.collateralAddress,
            loan.amountCollateral,
            _buyer
        );

        CreditDelegator(loan.pluginAddress).borrow(
            loan.principalAddress,
            loan.amountPrincipal,
            1,
            0,
            _buyer
        );
    }

    function getLoan(uint256 _id) public view returns (Loan memory) {
        return loans[_id];
    }
}
