async function main() {
    // Retrieve the contract factory for the 'Constants' contract
    const Constants = await ethers.getContractFactory("Constants");

    // Deploy the contract
    const constants = await Constants.deploy();

    // Wait for the contract to be deployed
    await constants.deployed();

    // Log the address to which the contract is deployed
    console.log("Constants contract deployed to:", constants.address);
}

// Run the main function, and catch any errors
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
