'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './GoBackLink.module.scss';

const GoBackLink = () => {
  const router = useRouter();
  return (
    <button role="link" onClick={() => router.back()} className={styles.goback}>
      Go Back
    </button>
  );
};

export default GoBackLink;
