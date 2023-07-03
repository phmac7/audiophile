import { create } from 'zustand';

interface useModalType {
  isOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
}

export const useModalStore = create<useModalType>((set) => ({
  isOpen: false,
  closeModal: () => set(() => ({ isOpen: false })),
  openModal: () => set(() => ({ isOpen: true })),
}));
