// deploy.js
const hre = require("hardhat");

async function main() {
    // Get the ContractFactories and Signers here.
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const balance = await deployer.getBalance();
    console.log("Account balance:", balance.toString());

    // Deploy Callback contract
    const Callback = await hre.ethers.getContractFactory("Callback");
    const callback = await Callback.deploy();
    await callback.deployed();
    console.log("Callback contract deployed to:", callback.address);

    // Deploy TestStorage contract
    const TestStorage = await hre.ethers.getContractFactory("TestStorage");
    const testStorage = await TestStorage.deploy();
    await testStorage.deployed();
    console.log("TestStorage contract deployed to:", testStorage.address);

    // Deploy TestTransientStorage contract
    const TestTransientStorage = await hre.ethers.getContractFactory("TestTransientStorage");
    const testTransientStorage = await TestTransientStorage.deploy();
    await testTransientStorage.deployed();
    console.log("TestTransientStorage contract deployed to:", testTransientStorage.address);

    // Deploy ReentrancyGuard contract
    const ReentrancyGuard = await hre.ethers.getContractFactory("ReentrancyGuard");
    const reentrancyGuard = await ReentrancyGuard.deploy();
    await reentrancyGuard.deployed();
    console.log("ReentrancyGuard contract deployed to:", reentrancyGuard.address);

    // Deploy ReentrancyGuardTransient contract
    const ReentrancyGuardTransient = await hre.ethers.getContractFactory("ReentrancyGuardTransient");
    const reentrancyGuardTransient = await ReentrancyGuardTransient.deploy();
    await reentrancyGuardTransient.deployed();
    console.log("ReentrancyGuardTransient contract deployed to:", reentrancyGuardTransient.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
