async function main() {
    // Retrieve the contract factory for the 'Primitives' contract
    const Primitives = await ethers.getContractFactory("Primitives");

    // Deploy the contract
    const primitives = await Primitives.deploy();

    // Wait for the contract to be deployed
    await primitives.deployed();

    // Log the address to which the contract is deployed
    console.log("Primitives contract deployed to:", primitives.address);
}

// Run the main function, and catch any errors
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
