// deploy.js
const { ethers } = require("hardhat");

async function main() {
    // Get the contract factory for the Base contract
    const Base = await ethers.getContractFactory("Base");

    // Deploy the Base contract
    const baseContract = await Base.deploy();
    await baseContract.deployed();
    console.log("Base contract deployed to:", baseContract.address);

    // Deploy the Child contract (which inherits Base)
    const Child = await ethers.getContractFactory("Child");
    const childContract = await Child.deploy();
    await childContract.deployed();
    console.log("Child contract deployed to:", childContract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
