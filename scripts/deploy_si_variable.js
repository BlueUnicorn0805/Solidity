// deploy.js

const { ethers } = require("hardhat");

async function main() {
  // Get the contract factory for contract C.
  const ContractFactory = await ethers.getContractFactory("C_SI");

  // Deploy contract C.
  const contract = await ContractFactory.deploy();

  // Wait for the contract to be deployed.
  await contract.deployed();

  console.log("Contract C deployed to:", contract.address);

  // Call the getName function to verify the overridden name.
  const name = await contract.getName();
  console.log("Contract name:", name);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
