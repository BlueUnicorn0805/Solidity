// deploy.js

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const balance = await deployer.getBalance();
    console.log("Account balance:", ethers.utils.formatEther(balance));

    // Deploy Counter contract
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();
    console.log("Counter deployed to:", counter.address);

    // Deploy UniswapExample contract
    const UniswapExample = await ethers.getContractFactory("UniswapExample");
    const uniswapExample = await UniswapExample.deploy();
    await uniswapExample.deployed();
    console.log("UniswapExample deployed to:", uniswapExample.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
