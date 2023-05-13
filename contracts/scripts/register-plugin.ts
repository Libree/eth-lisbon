import { ethers } from "hardhat";
import { pluginRepoFactoryABI } from "./abis"

async function main() {

  const signers = await ethers.getSigners();
  const maintainer = await signers[0].getAddress()

  const PLUGIN_REPO_FACTORY_ADDRESS = '0xDcC5933bc3567E7798Ff00Ab3413cF5f5801BD41'

  const PLUGIN_CONTRACT_NAME = "LiquidityProviderSetup"
  const PLUGIN_NAME = "liquidity-provider-plugin"

  const PluginSetup = await ethers.getContractFactory(PLUGIN_CONTRACT_NAME);
  const pluginSetup = await PluginSetup.deploy();

  const PluginRepoFactory = new ethers.Contract(
    PLUGIN_REPO_FACTORY_ADDRESS,
    pluginRepoFactoryABI,
    signers[0]
  )

  const pluginRepoFactoryContract = PluginRepoFactory.attach(PLUGIN_REPO_FACTORY_ADDRESS)

  await pluginSetup.deployed();

  console.log(`Plugin deployed to ${pluginSetup.address}`);

  const tx = await pluginRepoFactoryContract.connect(signers[0]).createPluginRepoWithFirstVersion(
    PLUGIN_NAME,
    pluginSetup.address,
    maintainer,
    ethers.utils.hexlify(
      ethers.utils.toUtf8Bytes(`ipfs://mock`)
    ),
    ethers.utils.hexlify(
      ethers.utils.toUtf8Bytes(`ipfs://mock`)
    )
  );
  console.log(
    `Creating & registering repo for plugin with tx ${tx.hash}`
  );
  await tx.wait();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});