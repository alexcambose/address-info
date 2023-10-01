import { AccountIndicator } from '../../../components/accountIndicator/AccountIndicator';
import { AddressSearchForm } from '../../../components/addressSearchForm/AddressSearchForm';
import { Text } from '../../../components/base/typography';
import { useTokenBalances } from '../../../hooks';
import styles from './overviewHeader.module.css';

export const OverviewHeader = () => {
  const { isLoading, data } = useTokenBalances();
  const totalBalance = data.tokens?.find(
    (e) => e.symbol === 'ETH'
  )?.totalBalance;
  return (
    <header className={styles.header}>
      <Text className={styles.title} variant="h1">
        Overview
      </Text>
      <AddressSearchForm className={styles.form} searchButton={false} />
      <AccountIndicator isLoading={isLoading}>{totalBalance}</AccountIndicator>
    </header>
  );
};
