async function main() {
    // Retrieve the contract factory for the 'SimpleStorage' contract
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");

    // Deploy the contract
    const simpleStorage = await SimpleStorage.deploy();

    // Wait for the contract to be deployed
    await simpleStorage.deployed();

    // Log the address to which the contract is deployed
    console.log("SimpleStorage contract deployed to:", simpleStorage.address);
}

// Run the main function, and catch any errors
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
