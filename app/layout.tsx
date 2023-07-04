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

const deliveryKey = process.env.CONTENT_DELIVERY_KEY as string;
const url = process.env.ENDPOINT_CONTENTFUL as string;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <div id="backdrop-root"></div>
        <div id="overlay-root"></div>
        <ApolloWrapper deliveryKey={deliveryKey} url={url}>
          <Navbar />
          <GetHeader />
          <main className={styles.layout}>{children}</main>
        </ApolloWrapper>
        <Footer />
      </body>
    </html>
  );
}
