import { AddressSearchForm } from '../components/addressSearchForm/AddressSearchForm';
import { Text } from '../components/base/typography';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <header></header>
      <main className={styles.main}>
        <Text variant="h1">Explore</Text>
        <Text>Instantly view details about an ethereum address.</Text>
        <div>
          <AddressSearchForm />
        </div>
      </main>
      <footer></footer>
    </>
  );
}
