import { JsonRpcProvider } from 'ethers';

const provider = new JsonRpcProvider("https://worldchain-mainnet.g.alchemy.com/v2/Uwb7T0DbXMQHjiJBNf9_b005qYjLmJqk");

async function main() {
  const blockNumber = "latest";
  const block = await provider.getBlock(blockNumber);
  console.log(block);
}

main();
