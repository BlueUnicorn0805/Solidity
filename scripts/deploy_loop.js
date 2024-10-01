async function main() {
    // Retrieve the contract factory for the 'Loop' contract
    const Loop = await ethers.getContractFactory("Loop");

    // Deploy the contract
    const loopContract = await Loop.deploy();

    // Wait for the contract to be deployed
    await loopContract.deployed();

    // Log the address to which the contract is deployed
    console.log("Loop contract deployed to:", loopContract.address);
}

// Run the main function, and catch any errors
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
