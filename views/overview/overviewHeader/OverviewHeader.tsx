import { AccountIndicator } from '../../../components/accountIndicator/AccountIndicator';
import { AddressSearchForm } from '../../../components/addressSearchForm/AddressSearchForm';
import { Text } from '../../../components/base/typography';
import styles from './overviewHeader.module.css';

export const OverviewHeader = () => {
  return (
    <header className={styles.header}>
      <Text className={styles.title} variant="h1">
        Overview
      </Text>
      <AddressSearchForm className={styles.form} searchButton={false} />
      <AccountIndicator>1.213</AccountIndicator>
    </header>
  );
};
