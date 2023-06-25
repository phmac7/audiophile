import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';

interface cartStoreType {
  totalItems: number;
  itemList: Array<ItemType>;
  addItem: (item: ItemType) => void;
  increaseQuantity: (id: any) => void;
  decreaseQuantity: (id: any) => void;
  cleanCart: () => void;
}
export interface ItemType {
  id: string;
  quantity: number;
  name: string;
  price: number;
  imgUrl: string;
}

export const useCartStore = create<cartStoreType>((set, get) => ({
  totalItems: 0,
  itemList: [],
  addItem: (item: ItemType) => {
    const itemList = get().itemList;
    if (itemList.some((e) => e.id === item.id)) {
      //   const index = itemList.findIndex((e) => e.id === item.id);
      //   const oldQuantity = itemList[index].quantity;
      const oldQuantity = itemList.find((i) => i.id === item.id)?.quantity!;
      set((state) => ({
        itemList: state.itemList.map((i) =>
          i.id === item.id ? { ...i, quantity: oldQuantity + item.quantity } : i
        ),
      }));
    } else {
      set((state) => ({ itemList: [...state.itemList, item] }));
    }
  },
  increaseQuantity: (id) => {
    const itemList = get().itemList;
    // const index = itemList.findIndex((item) => item.id === id);
    // let oldQuantity = itemList[index].quantity;
    const oldQuantity = itemList.find((item) => item.id === id)?.quantity!;
    set((state) => ({
      itemList: state.itemList.map((item) =>
        item.id === id ? { ...item, quantity: oldQuantity + 1 } : item
      ),
    }));
  },
  decreaseQuantity: (id) => {
    const itemList = get().itemList;
    // const index = itemList.findIndex((item) => item.id === id);
    // const oldQuantity = itemList[index].quantity;
    const oldQuantity = itemList.find((item) => item.id === id)?.quantity!;
    if (oldQuantity === 1) {
      set((state) => ({
        itemList: state.itemList.filter((item) => item.id !== id),
      }));
    } else {
      set((state) => ({
        itemList: state.itemList.map((item) =>
          item.id === id ? { ...item, quantity: oldQuantity - 1 } : item
        ),
      }));
    }
  },
  cleanCart: () => set(() => ({ itemList: [] })),
}));

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('Store', useCartStore);
}
