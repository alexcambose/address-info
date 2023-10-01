import { JsonRpcProvider, ethers } from 'ethers';
export const fetchTokenBalances = async (address: string) => {
  const ethers = require('ethers');
  const provider = new JsonRpcProvider(
    'https://cosmopolitan-quiet-layer.discover.quiknode.pro/811498a4e2b0939859e2a35ec1cf66ea4a50052d/'
  );
  const heads = await provider.send('qn_getWalletTokenBalance', [
    {
      wallet: address,
    },
  ]);
  return heads;
};

export const fetchWalletTransfers = async () => {
  const provider = new JsonRpcProvider(
    'https://cosmopolitan-quiet-layer.discover.quiknode.pro/811498a4e2b0939859e2a35ec1cf66ea4a50052d/'
  );
  const heads = await provider.send('qn_getWalletTokenTransactions', [
    {
      address: '0xB1eF81C824b954774FC315A8eD73f0ea86e37EfC',
      page: 1,
      perPage: 10,
    },
  ]);
  console.log(heads);
};
