// Import the necessary libraries
const { ethers } = require("hardhat");

async function main() {
  // Get the contract to deploy
  const HashFunction = await ethers.getContractFactory("HashFunction");
  const hashFunction = await HashFunction.deploy();

  // Wait for the deployment to complete
  await hashFunction.deployed();
  console.log("HashFunction deployed to:", hashFunction.address);

  // Deploy the second contract GuessTheMagicWord
  const GuessTheMagicWord = await ethers.getContractFactory(
    "GuessTheMagicWord"
  );
  const guessTheMagicWord = await GuessTheMagicWord.deploy();

  // Wait for the deployment to complete
  await guessTheMagicWord.deployed();
  console.log("GuessTheMagicWord deployed to:", guessTheMagicWord.address);
}

// Main entry point
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
