async function main() {
    // Retrieve the contract factory for the 'IfElse' contract
    const IfElse = await ethers.getContractFactory("IfElse");

    // Deploy the contract
    const ifElse = await IfElse.deploy();

    // Wait for the contract to be deployed
    await ifElse.deployed();

    // Log the address to which the contract is deployed
    console.log("IfElse contract deployed to:", ifElse.address);
}

// Run the main function, and catch any errors
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
