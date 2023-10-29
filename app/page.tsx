import {
  AudiophileBio,
  Categories,
  FeaturedProducts,
} from '@/components/organisms';

export default async function Home() {
  return (
    <>
      <Categories />
      <FeaturedProducts />
      <AudiophileBio />
    </>
  );
}
