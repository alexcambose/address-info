import './globals.css';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import { Providers } from '../providers/Providers';

const inter = Raleway({ subsets: ['latin'] });

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
        <body className={inter.className}>{children}</body>
      </html>
    </Providers>
  );
}
