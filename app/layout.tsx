import { Navbar } from '@/components/organisms';
import '@/styles/globals.css';
import { Manrope } from 'next/font/google';

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
      <body className={manrope.className}>
        <Navbar />
        <header></header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}