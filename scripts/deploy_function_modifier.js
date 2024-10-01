// Import ethers from hardhat
const { ethers } = require("hardhat");

async function main() {
  // Get the contract factory and deployer account
  const [deployer] = await ethers.getSigners();
  
  console.log("Deploying contracts with the account:", deployer.address);

  // Check deployer's balance
  const balance = await deployer.getBalance();
  console.log("Account balance:", ethers.utils.formatEther(balance));

  // Deploy the FunctionModifier contract
  const FunctionModifierContract = await ethers.getContractFactory("FunctionModifier");
  const functionModifierInstance = await FunctionModifierContract.deploy();
  await functionModifierInstance.deployed();
  console.log("FunctionModifier contract deployed at:", functionModifierInstance.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
