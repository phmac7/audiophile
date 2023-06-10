'use client';
import { Header } from '@/components/organisms';
import { usePathname } from 'next/navigation';
import React from 'react';

const GetHeader = () => {
  const pathname = usePathname();

  return <Header pathname={pathname} />;
};

export default GetHeader;
