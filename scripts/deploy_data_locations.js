// scripts/deploy.js
const hre = require("hardhat");

async function main() {
    // Compile the contract
    await hre.run('compile');

    // Deploy the DataLocations contract
    const DataLocations = await hre.ethers.getContractFactory("DataLocations");
    const dataLocations = await DataLocations.deploy();

    // Wait for the contract to be deployed
    await dataLocations.deployed();

    console.log("DataLocations contract deployed to:", dataLocations.address);
}

// Execute the deployment script
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
