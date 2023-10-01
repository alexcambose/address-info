import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import 'react-loading-skeleton/dist/skeleton.css';
import { Providers } from '../providers/Providers';
import './globals.css';
import styles from './layout.module.css';

const inter = Rubik({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Address Info',
  description: 'Display address information like account balances and more',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <main className={styles.main}>{children}</main>
          <footer className={styles.footer}>
            <p className={styles.footerText}>
              Coded & designed by Alexandru Cambose
            </p>
          </footer>
        </body>
      </html>
    </Providers>
  );
}
