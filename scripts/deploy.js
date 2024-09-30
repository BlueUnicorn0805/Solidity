const hre = require("hardhat");

async function main() {
    const HelloWorld = await hre.ethers.getContractFactory("HelloWorld");
    const helloWorld = await HelloWorld.deploy();

    await helloWorld.deployed();

    console.log("HelloWorld deployed to:", helloWorld.address);
}


main().catch((error) => {
    console.error(error);
    process.exit(1);
});
