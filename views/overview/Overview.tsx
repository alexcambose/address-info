import { fetchTokenData } from '../../utils/api';
import { OverviewHeader } from './overviewHeader/OverviewHeader';
import { OverviewTokenBalances } from './OverviewTokenBalances';
import { TotalBalanceIndicator } from './totalBalanceIndicator/TotalBalanceIndicator';

export const Overview = async () => {
  // const data = await fetchTokenData();
  return (
    <>
      <OverviewHeader />
      <TotalBalanceIndicator />
      <OverviewTokenBalances />
    </>
  );
};
