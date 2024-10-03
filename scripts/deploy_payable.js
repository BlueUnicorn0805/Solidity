// Importing necessary libraries
const { ethers } = require("hardhat");

async function main() {
    // Get the contract to deploy
    const Payable = await ethers.getContractFactory("Payable");
    const payable = await Payable.deploy({
        value: ethers.utils.parseEther("0.1") // Optional: send initial Ether during deployment
    });

    await payable.deployed();

    console.log("Payable contract deployed to:", payable.address);
}

// Execute the main function
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
