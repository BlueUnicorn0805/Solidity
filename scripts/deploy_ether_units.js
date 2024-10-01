async function main() {
    // Retrieve the contract factory for the 'EtherUnits' contract
    const EtherUnits = await ethers.getContractFactory("EtherUnits");

    // Deploy the contract
    const etherUnits = await EtherUnits.deploy();

    // Wait for the contract to be deployed
    await etherUnits.deployed();

    // Log the address to which the contract is deployed
    console.log("EtherUnits contract deployed to:", etherUnits.address);
}

// Run the main function, and catch any errors
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
