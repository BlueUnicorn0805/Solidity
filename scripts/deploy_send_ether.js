// Import the necessary libraries
const { ethers } = require("hardhat");

async function main() {
    // Deploy ReceiveEther contract
    const ReceiveEtherFactory = await ethers.getContractFactory("ReceiveEther");
    const receiveEtherContract = await ReceiveEtherFactory.deploy();
    await receiveEtherContract.deployed();
    console.log("ReceiveEther deployed to:", receiveEtherContract.address);

    // Deploy SendEther contract
    const SendEtherFactory = await ethers.getContractFactory("SendEther");
    const sendEtherContract = await SendEtherFactory.deploy();
    await sendEtherContract.deployed();
    console.log("SendEther deployed to:", sendEtherContract.address);
}

// Run the deploy function and handle errors
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
