import BigNumber from 'bignumber.js';
import { Text } from '../../../components/base/typography';
import { TransfersList } from './transferList/TransferList';
import { useTokenTransfers } from '../../../hooks';

export const OverviewTransfers = () => {
  const { data, isLoading } = useTokenTransfers();
  if (isLoading) return null;
  return (
    <div>
      <Text variant="h1">Token Transfers (ERC20)</Text>
      <TransfersList items={data} />
    </div>
  );
};
