import { Categories, Header, Navbar } from '@/components/organisms';
import React from 'react';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Header pathname="/" />
      <main style={{ margin: '60px auto' }}>
        <section>
          <Categories />
        </section>
      </main>
    </>
  );
};

export default Homepage;
