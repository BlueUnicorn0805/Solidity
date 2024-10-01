// Import the Hardhat runtime environment
const hre = require("hardhat");

async function main() {
    // Compile the contracts (optional, can be skipped if already compiled)
    await hre.run("compile");

    // Get the contract factory for the Todos contract
    const Todos = await hre.ethers.getContractFactory("Todos");

    // Deploy the contract
    const todos = await Todos.deploy();

    // Wait for the deployment to be mined
    await todos.deployed();

    // Log the address of the deployed contract
    console.log("Todos contract deployed to:", todos.address);
}

// Execute the main function and handle errors
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
