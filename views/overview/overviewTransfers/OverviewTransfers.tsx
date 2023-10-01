import { Text } from '../../../components/base/typography';
import { useTokenTransfers } from '../../../hooks';
import { TransfersList } from './transferList/TransferList';

export const OverviewTransfers = () => {
  const { data, isLoading } = useTokenTransfers();
  if (isLoading) return null;
  return (
    <div>
      <Text variant="h1">Token Transfers (ERC20)</Text>
      {!!data.length ? (
        <TransfersList items={data} />
      ) : (
        <Text variant="p" styling="status">
          No token transfers
        </Text>
      )}
    </div>
  );
};
