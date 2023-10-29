import { create } from 'zustand';

interface storeType {
  isMenuOpen: boolean;
  toggleMenuOpen: () => void;
  closeMenu: () => void;
  isCartOpen: boolean;
  closeCart: () => void;
  toggleCartOpen: () => void;
}

export const usenavbarStore = create<storeType>((set) => ({
  isMenuOpen: false,
  toggleMenuOpen: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
  isCartOpen: false,
  closeCart: () => set({ isCartOpen: false }),
  toggleCartOpen: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
}));
