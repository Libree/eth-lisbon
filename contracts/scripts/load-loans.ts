import { ethers } from "hardhat";

async function main() {
    const LoanManager = await ethers.getContractFactory("LoanManager");
    const loanManager = LoanManager.attach("0x375324fB4Fb8e9A872f08b26f43B7A7252aB9362")

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

    const tx = await loanManager.createLoan(
        "Libree",
        "0x375324fB4Fb8e9A872f08b26f43B7A7252aB9362",
        "0x7E21152B357Da303D6f6F1961c319F7d1bea2268",
        "0xe9DcE89B076BA6107Bb64EF30678efec11939234",
        "0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa",
        ethers.utils.parseUnits("1000", "ether"),
        30000 * 1e6,
        120
    )

    await tx.wait()

    console.log(
        `Loan TX ${tx.hash}`
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
