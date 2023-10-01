import { JsonRpcProvider } from 'ethers';
export const fetchTokenBalances = async (address: string) => {
  const provider = new JsonRpcProvider(
    process.env.NEXT_PUBLIC_QUICKNODE_API_URL
  );
  const heads = await provider.send('qn_getWalletTokenBalance', [
    {
      wallet: address,
    },
  ]);
  return heads;
};
export const fetchTransfers = async (address: string): Promise<{ result: any[] }> => {
  return fetch(
    `https://api.etherscan.io/api?module=account&action=tokentx&address=${address}&page=1&offset=100&startblock=0&sort=desc&apikey=${process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY}`
  ).then((e) => e.json());
};
export const fetchTokenMetadata = async () => {
  return fetch('https://li.quest/v1/tokens?chains=ETH').then((e) => e.json());
};
