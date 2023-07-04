'use client';
import { useModalStore } from '@/store/modal-store';
import styles from './Modal.module.scss';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

const Backdrop = ({
  closeOnBackdrop = true,
}: {
  closeOnBackdrop?: boolean;
}) => {
  const closeModal = useModalStore((state) => state.closeModal);
  const onClickHandler = () => {
    if (closeOnBackdrop === true) {
      closeModal();
    } else {
      null;
    }
  };
  return <div className={styles.backdrop} onClick={onClickHandler} />;
};

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

const Modal = ({
  children,
  closeOnBackdrop = true,
}: {
  children: React.ReactNode;
  closeOnBackdrop?: boolean;
}) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);
  return mounted ? (
    <>
      {createPortal(
        <Backdrop closeOnBackdrop={closeOnBackdrop} />,
        document.getElementById('backdrop-root')!
      )}
      {createPortal(
        <ContentWrapper>{children}</ContentWrapper>,
        document.getElementById('overlay-root')!
      )}
    </>
  ) : null;
};

export default Modal;
