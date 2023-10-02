import { JsonRpcProvider } from 'ethers';
import { TokenBalance, TokenMetadataItem, TransactionInfo } from './api.types';
export const fetchTokenBalances = async (address: string) => {
  const provider = new JsonRpcProvider(
    process.env.NEXT_PUBLIC_QUICKNODE_API_URL
  );
  const heads = await provider.send('qn_getWalletTokenBalance', [
    {
      wallet: address,
    },
  ]);
  return heads as { nativeTokenBalance: string; result: TokenBalance[] };
};
export const fetchTransfers = async (
  address: string
): Promise<TransactionInfo[] | undefined> => {
  const data = (await fetch(
    `https://api.etherscan.io/api?module=account&action=tokentx&address=${address}&page=1&offset=100&startblock=0&sort=desc&apikey=${process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY}`
  ).then((e) => e.json())) as { result: TransactionInfo[] };
  return data.result;
};
export const fetchTokenMetadata = async (): Promise<
  TokenMetadataItem[] | undefined
> => {
  const data = await fetch('https://li.quest/v1/tokens?chains=ETH').then((e) =>
    e.json()
  );
  return data?.['tokens']?.['1'];
};
