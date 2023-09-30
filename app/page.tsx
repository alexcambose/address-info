import styles from './page.module.css';
import { Home } from '../views/home/Home';

export default function Main() {
  return (
    <>
      <header></header>
      <main className={styles.main}>
        <Home />
      </main>
      <footer></footer>
    </>
  );
}
