import { useMemo } from 'react';
import { useAddress } from '.';
import { ethers } from 'ethers';

export const useExplorerUrl = (contractAddressOrTxHash?: string) => {
  const address = useAddress();
  return useMemo(() => {
    if (
      contractAddressOrTxHash === ethers.ZeroAddress ||
      !contractAddressOrTxHash
    ) {
      return `https://etherscan.io/address/${address}`;
    }
    if (contractAddressOrTxHash.length > 42) {
      return `https://etherscan.io/tx/${contractAddressOrTxHash}`;
    }
    return `https://etherscan.io/token/${contractAddressOrTxHash}?a=${address}`;
  }, [address, contractAddressOrTxHash]);
};
