async function main() {
    // Retrieve the contract factory for the 'Array' contract
    const ArrayContract = await ethers.getContractFactory("Array");

    // Deploy the contract
    const arrayContract = await ArrayContract.deploy();

    // Wait for the contract to be deployed
    await arrayContract.deployed();

    // Log the address to which the contract is deployed
    console.log("Array contract deployed to:", arrayContract.address);
}

// Run the main function, and catch any errors
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
