import { ListItemSkeleton } from '../../../components/base/list';
import { Text } from '../../../components/base/typography';
import { useTokenTransfers } from '../../../hooks';
import { TransfersList } from './transferList/TransferList';

export const OverviewTransfers = () => {
  const { data, isLoading } = useTokenTransfers();
  const tokenTransfers = !!data?.length ? (
    <TransfersList items={data} />
  ) : (
    <Text variant="p" styling="status">
      No token transfers
    </Text>
  );
  return (
    <div>
      <Text variant="h2">Token Transfers (ERC20)</Text>
      {isLoading ? <ListItemSkeleton /> : tokenTransfers}
    </div>
  );
};
