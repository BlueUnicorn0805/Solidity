async function main() {
    // Retrieve the contract factory for the 'Mapping' contract
    const Mapping = await ethers.getContractFactory("Mapping");
    const NestedMapping = await ethers.getContractFactory("NestedMapping");

    // Deploy the contracts
    const mappingContract = await Mapping.deploy();
    const nestedMappingContract = await NestedMapping.deploy();

    // Wait for the contracts to be deployed
    await mappingContract.deployed();
    await nestedMappingContract.deployed();

    // Log the addresses to which the contracts are deployed
    console.log("Mapping contract deployed to:", mappingContract.address);
    console.log("NestedMapping contract deployed to:", nestedMappingContract.address);
}

// Run the main function, and catch any errors
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
