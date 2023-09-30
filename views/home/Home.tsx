import { AddressSearchForm } from '../../components/addressSearchForm/AddressSearchForm';
import { Text } from '../../components/base/typography';
import styles from './home.module.css';

export const Home = () => {
  return (
    <div>
      <Text variant="h1">Explore</Text>
      <Text>Instantly view details about an ethereum address.</Text>
      <AddressSearchForm className={styles.searchForm} />
    </div>
  );
};
