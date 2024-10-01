const hre = require("hardhat");

async function main() {
    const FirstApplication = await hre.ethers.getContractFactory("Counter");
    const firstApp = await FirstApplication.deploy();
    await firstApp.deployed();

    (await firstApp.get()).toString();  // Check current count
    await firstApp.inc();               // Increment count
    (await firstApp.get()).toString();  // Check updated count

    console.log("FirstApplication deployed to:", firstApp.address);
}


main().catch((error) => {
    console.error(error);
    process.exit(1);
});
