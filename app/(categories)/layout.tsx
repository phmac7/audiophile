import { AudiophileBio, Categories } from '@/components/organisms';
import { Suspense } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Categories />
      <AudiophileBio />
    </>
  );
}
