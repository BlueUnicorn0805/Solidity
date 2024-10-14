const { ethers } = require("hardhat");

async function main() {
  // Get the contract factory
  const EtherWallet = await ethers.getContractFactory("EtherWallet");

  // Deploy the contract
  const etherWallet = await EtherWallet.deploy();

  // Wait for the contract to be deployed
  await etherWallet.deployed();

  console.log("EtherWallet deployed to:", etherWallet.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
