import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  product: any;
  count: number;
};

type CartStore = {
  items: CartItem[];
  add: (product: any) => void;
  remove: (product: any) => void;
  deleteItem: (product: any) => void;
  clear: () => void;
};

const useCart = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      add: (product: any) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.product.id === product.id
          );

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.product.id === product.id
                  ? { ...item, count: item.count + 1 }
                  : item
              ),
            };
          }

          return {
            items: [...state.items, { product, count: 1 }],
          };
        });
      },
      remove: (product: any) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.product.id === product.id
          );
          return {
            items: state.items
              .map((item) =>
                item.product.id === product.id
                  ? { ...item, count: item.count - 1 }
                  : item
              )
              .filter((item) => item.count > 0),
          };
        });
      },
      deleteItem: (product: any) => {
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== product.id),
        }));
      },
      clear: () => {
        set(() => ({
          items: [],
        }));
      },
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCart;
