import { useTokenBalances } from '.';
import { formatDecimals } from '../utils/stringUtils';

export const useTotalBalanceUsd = () => {
  const { data, ...props } = useTokenBalances();
  return {
    ...props,
    data: formatDecimals(
      data.reduce((acc, e) => acc + parseFloat(e.totalAmountUSD), 0) || '0'
    ),
  };
};
