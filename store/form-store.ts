import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';

export interface FormStoreType {
  isValid: {
    name: boolean;
    email: boolean;
    phone: boolean;
    address: boolean;
    zip: boolean;
    city: boolean;
    country: boolean;
    eMoneyNumber: boolean;
    eMoneyPin: boolean;
  };
  setValid: (value: string) => void;
  setInvalid: (value: string) => void;
}

export const useFormStore = create<FormStoreType>((set) => ({
  isValid: {
    name: false,
    address: false,
    city: false,
    country: false,
    email: false,
    eMoneyNumber: false,
    eMoneyPin: false,
    phone: false,
    zip: false,
  },
  setValid: (value: string) => {
    set((state) => ({ isValid: { ...state.isValid, [value]: true } }));
  },
  setInvalid: (value: string) => {
    set((state) => ({ isValid: { ...state.isValid, [value]: false } }));
  },
}));
