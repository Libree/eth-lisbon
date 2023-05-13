import { ethers } from "hardhat";

async function main() {
    const LoanManager = await ethers.getContractFactory("LoanManager");
    const loanManager = LoanManager.attach("0x5670f3A473830e2208fc6bD1cC495843Dd8B0d42")

    // const tx = await loanManager.createLoan(
    //     "DevDao",
    //     "0x375324fB4Fb8e9A872f08b26f43B7A7252aB9362",
    //     "0x7E21152B357Da303D6f6F1961c319F7d1bea2268",
    //     "0xe9DcE89B076BA6107Bb64EF30678efec11939234",
    //     "0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa",
    //     ethers.utils.parseUnits("8", "ether"),
    //     10000 * 1e6,
    //     34
    // )

    // const tx = await loanManager.createLoan(
    //     "Startup DAO",
    //     "0x1f0e881a27defe0914d6c3ce592d64985dd92936",
    //     "0x87567A5e9EB66090dD33635F9909246fA498A898",
    //     "0xe9DcE89B076BA6107Bb64EF30678efec11939234",
    //     "0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa",
    //     ethers.utils.parseUnits("10000", "ether"),
    //     50000 * 1e6,
    //     120
    // )

    // await tx.wait()

    const loans = await loanManager.getLoan(2)

    console.log({ loans })


    // const tx = await loanManager.acceptLoan(
    //     "0x4a3cd7afb24616c6a656bbfeaddb5f50b4ebc1bd",
    //     "0x4a3cd7afb24616c6a656bbfeaddb5f50b4ebc1bd",
    //     2
    // )

    // await tx.wait()

    console.log(
        // `Loan TX ${tx.hash}`
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
