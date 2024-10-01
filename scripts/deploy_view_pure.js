// Import ethers from hardhat
const { ethers } = require("hardhat");

async function main() {
  // Get the contract factory and deployer account
  const [deployer] = await ethers.getSigners();
  
  console.log("Deploying contracts with the account:", deployer.address);

  // Check deployer's balance
  const balance = await deployer.getBalance();
  console.log("Account balance:", ethers.utils.formatEther(balance));

  // Deploy the ViewAndPure contract
  const ViewAndPureContract = await ethers.getContractFactory("ViewAndPure");
  const viewAndPureInstance = await ViewAndPureContract.deploy();
  await viewAndPureInstance.deployed()
  ;
  console.log("ViewAndPure contract deployed at:", viewAndPureInstance.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
