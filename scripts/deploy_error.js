// Import ethers from hardhat
const { ethers } = require("hardhat");

async function main() {
  // Get the contract factory and deployer account
  const [deployer] = await ethers.getSigners();
  
  console.log("Deploying contracts with the account:", deployer.address);

  // Check deployer's balance
  const balance = await deployer.getBalance();
  console.log("Account balance:", ethers.utils.formatEther(balance));

  // Deploy the Error contract
  const ErrorContract = await ethers.getContractFactory("Error");
  const errorInstance = await ErrorContract.deploy();
  await errorInstance.deployed();
  console.log("Error contract deployed at:", errorInstance.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
