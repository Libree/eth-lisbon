import { expect } from "chai";
import { ethers } from 'hardhat';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';



describe('Loan Manager', function () {
    let signers: SignerWithAddress[];
    let loanManager: any;
    const PRINCIPAL_ADDRESS = '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889'
    const COLLATERAL_ADDRESS = '0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa'
    const AMOUNT_COLLATERAL = 100000000
    const AMOUNT_PRINCIPAL = 1000000
    const DURATION = 45

    before(async () => {
        signers = await ethers.getSigners();

        const LoanManager = await ethers.getContractFactory('LoanManager');
        loanManager = await LoanManager.deploy()
    });



    describe('Loan request: ', async () => {
        it('Dao lender request a loan', async () => {
            await loanManager.createLoan(
                signers[0].address,
                signers[1].address,
                COLLATERAL_ADDRESS,
                PRINCIPAL_ADDRESS,
                AMOUNT_COLLATERAL,
                AMOUNT_PRINCIPAL,
                DURATION
            )

            const loan = await loanManager.getLoan(0);

            expect(loan.collateralAddress).to.be.equal(COLLATERAL_ADDRESS)
            expect(loan.principalAddress).to.be.equal(PRINCIPAL_ADDRESS)
            expect(Number(loan.amountCollateral)).to.be.equal(AMOUNT_COLLATERAL)
            expect(Number(loan.amountPrincipal)).to.be.equal(AMOUNT_PRINCIPAL)

        });
    });
});
