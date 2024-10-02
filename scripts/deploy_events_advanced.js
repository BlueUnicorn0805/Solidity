// scripts/deploy.js

async function main() {
    // Get the contract factories
    const EventDrivenArchitecture = await hre.ethers.getContractFactory("EventDrivenArchitecture");
    const EventSubscription = await hre.ethers.getContractFactory("EventSubscription");
  
    // Deploy the contracts
    const eventDrivenArchitecture = await EventDrivenArchitecture.deploy();
    await eventDrivenArchitecture.deployed();
    console.log("EventDrivenArchitecture deployed to:", eventDrivenArchitecture.address);
  
    const eventSubscription = await EventSubscription.deploy();
    await eventSubscription.deployed();
    console.log("EventSubscription deployed to:", eventSubscription.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  