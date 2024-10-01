async function main() {
    // Retrieve the contract factory for the 'Gas' contract
    const Gas = await ethers.getContractFactory("Gas");

    // Deploy the contract
    const gasContract = await Gas.deploy();

    // Wait for the contract to be deployed
    await gasContract.deployed();

    // Log the address to which the contract is deployed
    console.log("Gas contract deployed to:", gasContract.address);
}

// Run the main function, and catch any errors
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
