import { useQuery } from 'react-query';
import { fetchTokenMetadata } from '../utils/api';

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
  const { isLoading, error, data } = useQuery(
    'tokenMetadata',
    fetchTokenMetadata
  );
  return {
    isLoading,
    error,
    data: data?.['tokens']?.['1'] as TokenMetadataItem[],
  };
};
