import { AccountIndicator } from '../../../components/accountIndicator/AccountIndicator';
import { AddressSearchForm } from '../../../components/addressSearchForm/AddressSearchForm';
import { Text } from '../../../components/base/typography';
import { useTokenBalances } from '../../../hooks';
import { localizedStringNumber } from '../../../utils/stringUtils';
import styles from './overviewHeader.module.css';

export const OverviewHeader = () => {
  const { isLoading, data } = useTokenBalances();
  const totalBalance =
    data.tokens?.find((e) => e.symbol === 'ETH')?.totalBalance || 0;
  return (
    <header className={styles.header}>
      <a href="/">
        <Text className={styles.title} variant="h1">
          Overview
        </Text>
      </a>
      <AddressSearchForm className={styles.form} searchButton={false} />
      <AccountIndicator isLoading={isLoading}>
        {localizedStringNumber(totalBalance)}
      </AccountIndicator>
    </header>
  );
};
