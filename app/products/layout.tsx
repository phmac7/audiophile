import { AudiophileBio, Categories } from '@/components/organisms';

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
