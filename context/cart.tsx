"use client";

import { createContext, useContext, useState } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  size: string;
};

type ProductInventory = {
  [key: string]: number;
};

const inventoryData: ProductInventory = {
  bra: 50,
  leggings: 50,
  jacket: 40,
  pants: 40,
  slides: 60,
};

const CartContext = createContext<any>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [inventory, setInventory] = useState<ProductInventory>(inventoryData);
  const [open, setOpen] = useState(false);

  function addToCart(item: CartItem) {
    if (inventory[item.id] <= 0) {
      alert("Sold Out");
      return;
    }

    setCart([...cart, item]);

    setInventory({
      ...inventory,
      [item.id]: inventory[item.id] - 1,
    });

    setOpen(true);
  }

  function removeFromCart(index: number) {
    const item = cart[index];

    setInventory({
      ...inventory,
      [item.id]: inventory[item.id] + 1,
    });

    setCart(cart.filter((_, i) => i !== index));
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        inventory,
        open,
        setOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}