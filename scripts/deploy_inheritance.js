// deploy.js

const { ethers } = require("hardhat");

async function main() {
  // Get the contract factory for the contract you want to deploy.
  const ContractFactory = await ethers.getContractFactory("D");

  // Deploy the contract.
  const contract = await ContractFactory.deploy();

  // Wait for the deployment to complete.
  await contract.deployed();

  console.log("Contract deployed to address:", contract.address);

  // Optionally, call the foo() function after deployment
  const result = await contract.foo();
  console.log("Result of foo():", result);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
