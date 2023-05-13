import { ethers } from "hardhat";

async function main() {
  const LoanManager = await ethers.getContractFactory("LoanManager");
  const loanManager = await LoanManager.deploy();

  await loanManager.deployed();

  console.log(
    `Loan manager deployed to ${loanManager.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
