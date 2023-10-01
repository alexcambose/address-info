import { useTokenBalances } from '.';

export const useTotalBalanceUsd = () => {
  const { data, ...props } = useTokenBalances();
  return {
    ...props,
    data: data.tokens?.reduce(
      (acc, e) => acc + parseFloat(e.totalAmountUSD),
      0
    ),
  };
};
