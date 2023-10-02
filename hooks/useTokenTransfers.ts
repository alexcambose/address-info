import { useQuery } from 'react-query';
import { useAddress } from '.';
import { fetchTransfers } from '../utils/api';
import { TransferItemProps } from '../views/overview/overviewTransfers/transferList/TransferItem';
import BigNumber from 'bignumber.js';
import { useTokenMetadata } from './useTokenMetadata';
import { formatDecimals } from '../utils/stringUtils';
import { ethers } from 'ethers';

export const useTokenTransfers = () => {
  const address = useAddress();
  const { isLoading, error, data } = useQuery(['tokenTransfers', address], () =>
    fetchTransfers(address)
  );
  const { data: tokenMetadata, isLoading: isTokenMetadataLoading } =
    useTokenMetadata();
  return {
    isLoading: isLoading || isTokenMetadataLoading,
    error,
    data: data
      ?.map((e) => {
        const tokenItemMetadata = tokenMetadata?.find(
          (tm) => tm.address === (e.contractAddress || ethers.ZeroAddress)
        );
        if (!tokenItemMetadata) return null;
        return {
          ...e,
          txHash: e.hash,
          amount: formatDecimals(
            new BigNumber(e.value)
              .div(10 ** tokenItemMetadata.decimals)
              .toString()
          ),
          to: e.to,
          from: e.from,
          type:
            address.toLowerCase() === e.to.toLowerCase()
              ? 'DEPOSIT'
              : 'WITHDRAW',
          blockNumber: e.blockNumber,
          timestamp: parseInt(e.timeStamp),
          tokenName: e.tokenName,
          tokenSymbol: e.tokenSymbol,
          logoURI: tokenItemMetadata.logoURI,
          priceUSD: tokenItemMetadata.priceUSD,
          transferUSD: formatDecimals(
            new BigNumber(e.value)
              .times(tokenItemMetadata.priceUSD)
              .div(10 ** tokenItemMetadata.decimals)
              .toString()
          ),
        };
      })
      .filter((e) => !!e) as TransferItemProps[] | undefined,
  };
};
