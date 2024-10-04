const { ethers } = require("hardhat");

async function main() {
    // Deploy Callee contract first
    const Callee = await ethers.getContractFactory("Callee");
    const callee = await Callee.deploy(); // No constructor params
    await callee.deployed();
    console.log("Callee contract deployed to:", callee.address);

    // Deploy Caller contract
    const Caller = await ethers.getContractFactory("Caller");
    const caller = await Caller.deploy(); // No constructor params
    await caller.deployed();
    console.log("Caller contract deployed to:", caller.address);

    // Example of setting x via Caller
    const setXTx = await caller.setX(callee.address, 10);
    await setXTx.wait();

    console.log("Caller contract setX called with value 10 on Callee");

    // Example of sending Ether and setting x via Caller
    const setXandSendEtherTx = await caller.setXandSendEther(callee.address, 20, {
        value: ethers.utils.parseEther("0.1"), // Sending 0.1 ETH
    });
    await setXandSendEtherTx.wait();

    console.log("Caller contract setXandSendEther called with value 20 and 0.1 ETH on Callee");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
