import { Footer, Navbar } from '@/components/organisms';
import GetHeader from '@/helpers/GetHeader';
import '@/styles/globals.css';
import { Manrope } from 'next/font/google';
import styles from '@/styles/layout.module.scss';
import { ApolloWrapper } from '@/lib/apollo-wrapper';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata = {
  title: 'Audiophile',
  description: 'Best audio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ApolloWrapper>
        <body className={manrope.className}>
          <Navbar />
          <GetHeader />
          <main className={styles.layout}>{children}</main>
          <Footer />
        </body>
      </ApolloWrapper>
    </html>
  );
}
