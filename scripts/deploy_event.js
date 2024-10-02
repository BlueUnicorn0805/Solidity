// Import Hardhat libraries and utilities
const hre = require("hardhat");

async function main() {
  // Compile the contract (this step is optional if you've already compiled the contract)
  await hre.run('compile');

  // Get the contract factory for the "Event" contract
  const Event = await hre.ethers.getContractFactory("Event");

  // Deploy the contract
  const eventContract = await Event.deploy();

  // Wait for the deployment to be confirmed
  await eventContract.deployed();

  // Log the deployed contract address
  console.log("Event contract deployed to:", eventContract.address);
}

// Boilerplate to handle async/await and ensure proper execution
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
