async function main() {
  const ReflectionToken = await hre.ethers.getContractFactory("ReflectionToken");
  const reflectionToken = await ReflectionToken.deploy();

  await reflectionToken.deployed();

  console.log("ReflectionToken deployed to:", reflectionToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
