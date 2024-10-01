async function main() {
    // Retrieve the contract factory for the 'Immutable' contract
    const Immutable = await ethers.getContractFactory("Immutable");

    // Set a value for the immutable variable MY_UINT (e.g., 123)
    const myUintValue = 123;

    // Deploy the contract, passing the constructor argument
    const immutableContract = await Immutable.deploy(myUintValue);

    // Wait for the contract to be deployed
    await immutableContract.deployed();

    // Log the address to which the contract is deployed
    console.log("Immutable contract deployed to:", immutableContract.address);
}

// Run the main function, and catch any errors
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
