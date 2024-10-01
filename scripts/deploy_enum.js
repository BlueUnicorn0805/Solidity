async function main() {
    // Retrieve the contract factory for the 'Enum' contract
    const EnumContract = await ethers.getContractFactory("Enum");

    // Deploy the contract
    const enumContract = await EnumContract.deploy();

    // Wait for the contract to be deployed
    await enumContract.deployed();

    // Log the address to which the contract is deployed
    console.log("Enum contract deployed to:", enumContract.address);
}

// Run the main function, and catch any errors
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
