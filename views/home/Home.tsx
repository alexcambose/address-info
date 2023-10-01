import { AddressSearchForm } from '../../components/addressSearchForm/AddressSearchForm';
import { Container } from '../../components/base/layout';
import { Text } from '../../components/base/typography';
import styles from './home.module.css';

export const Home = () => {
  return (
    <Container>
      <div className={styles.homeContainer}>
        <Text variant="h1">AddressInfo - Explore</Text>
        <Text>Instantly view details about an ethereum address.</Text>
        <AddressSearchForm className={styles.searchForm} />
      </div>
    </Container>
  );
};
