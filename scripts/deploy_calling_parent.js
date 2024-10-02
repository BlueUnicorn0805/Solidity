// deploy.js

const { ethers } = require("hardhat");

async function main() {
  // Get the contract factory for contract D.
  const ContractFactory = await ethers.getContractFactory("D_Calling");

  // Deploy contract D.
  const contract = await ContractFactory.deploy();

  // Wait for the contract to be deployed.
  await contract.deployed();

  console.log("Contract D deployed to:", contract.address);

  // Call the foo() and bar() functions to check inheritance behavior
  console.log("Calling foo()...");
  let tx = await contract.foo();
  await tx.wait(); // Wait for the transaction to be mined
  console.log("foo() called, check the event logs.");

  console.log("Calling bar()...");
  tx = await contract.bar();
  await tx.wait(); // Wait for the transaction to be mined
  console.log("bar() called, check the event logs.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
