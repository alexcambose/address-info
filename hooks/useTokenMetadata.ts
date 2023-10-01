import { useQuery } from 'react-query';

export interface TokenMetadataItem {
  address: string;
  chainId: number;
  symbol: string;
  decimals: number;
  name: string;
  priceUSD: string;
  logoURI: string;
  coinKey: string;
}

export const useTokenMetadata = () => {
  const { isLoading, error, data } = useQuery('tokenMetadata', () =>
    fetch('https://li.quest/v1/tokens?chains=ETH').then((e) => e.json())
  );
  return {
    isLoading,
    error,
    data: data?.['tokens']['1'] as TokenMetadataItem[],
  };
};
