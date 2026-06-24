import { createContext, useContext, useState } from "react";

// ─── CART CONTEXT ─────────────────────────────────────────────────────────────
const CartContext = createContext();
export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const addItem = (item) => {
    setItems((prev) => {
      const ex = prev.find((i) => i.id === item.id);
      if (ex)
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i,
        );
      return [...prev, { ...item, qty: 1 }];
    });
  };
  const removeItem = (id) =>
    setItems((prev) => prev.filter((i) => i.id !== id));
  const updateQty = (id, delta) =>
    setItems((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, qty: Math.max(0, i.qty + delta) } : i,
        )
        .filter((i) => i.qty > 0),
    );
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);
  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQty,
        total,
        count,
        open,
        setOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export const useCart = () => useContext(CartContext);
