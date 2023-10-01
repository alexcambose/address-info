import BigNumber from 'bignumber.js';
import { useQuery } from 'react-query';
import { useAddress } from '.';
import { fetchTokenBalances } from '../utils/api';
import { TokenMetadataItem, useTokenMetadata } from './useTokenMetadata';
import { formatDecimals } from '../utils/stringUtils';

export interface TokenBalance {
  totalBalance: string;
  symbol: string;
  name: string;
  contractAddress: string;
  logoURI: string;
  priceUSD: string;
  totalAmountUSD: string;
}

const generateTokenBalances = (
  tokenBalances: any,
  tokenMetadata: TokenMetadataItem[]
) => {
  return [
    {
      symbol: 'ETH',
      totalBalance: new BigNumber(tokenBalances.nativeTokenBalance)
        .times(10 ** 18)
        .toString(),
    },
    ...tokenBalances.result,
  ]
    .map((e) => {
      const tokenItemMetadata = tokenMetadata.find(
        (tm) => tm.symbol === e.symbol
      );
      if (!tokenItemMetadata) return false;
      return {
        ...e,
        totalBalance: new BigNumber(e.totalBalance)
          .div(10 ** tokenItemMetadata.decimals)
          .toFixed(2),
        symbol: tokenItemMetadata.symbol,
        name: tokenItemMetadata.name,
        contractAddress: tokenItemMetadata.address,
        logoURI: tokenItemMetadata.logoURI,
        priceUSD: tokenItemMetadata.priceUSD,
        totalAmountUSD: formatDecimals(
          new BigNumber(e.totalBalance)
            .times(tokenItemMetadata.priceUSD)
            .div(10 ** tokenItemMetadata.decimals)
            .toFixed(2)
        ),
      };
    })
    .filter((e) => !!e && e.totalBalance > 0) as TokenBalance[];
};

export const useTokenBalances = () => {
  const { data: tokenMetadata, isLoading: isLoadingMetadata } =
    useTokenMetadata();
  const address = useAddress();
  const { isLoading, error, data } = useQuery<any>('tokenBalances', async () =>
    fetchTokenBalances(address)
  );
  return {
    isLoading: isLoading || isLoadingMetadata,
    error,
    data:
      data && tokenMetadata ? generateTokenBalances(data, tokenMetadata) : [],
  };
};
