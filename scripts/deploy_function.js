// Import ethers from hardhat
const { ethers } = require("hardhat");

async function main() {
  // Get the contract factory and deployer account
  const [deployer] = await ethers.getSigners();
  
  console.log("Deploying contracts with the account:", deployer.address);

  // Check deployer's balance
  const balance = await deployer.getBalance();
  console.log("Account balance:", ethers.utils.formatEther(balance));

  // Deploy the Function contract
  const FunctionContract = await ethers.getContractFactory("Function");
  const functionInstance = await FunctionContract.deploy();
  await functionInstance.deployed();
  console.log("Function contract deployed at:", functionInstance.address);

  // Deploy the XYZ contract
  const XYZContract = await ethers.getContractFactory("XYZ");
  const xyzInstance = await XYZContract.deploy();
  await xyzInstance.deployed();
  console.log("XYZ contract deployed at:", xyzInstance.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
