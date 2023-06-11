import { create } from 'zustand'
import { mountStoreDevtool } from 'simple-zustand-devtools';

interface storeType {
    menuOpen: boolean
    toggleMenuOpen: () => void
    closeMenu: () => void
}

export const useStore = create<storeType>((set) => ({
  menuOpen: false,
  toggleMenuOpen: () => set(state => ({menuOpen: !state.menuOpen})),
  closeMenu: () => set({menuOpen: false})
}))

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Store', useStore);
  }