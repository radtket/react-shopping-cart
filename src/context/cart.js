"use client";

import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(undefined);

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};

export function CartProvider(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState({
    productQuantity: 0,
    installments: 0,
    totalPrice: 0,
    currencyId: "USD",
    currencyFormat: "$",
  });

  const CartContextValue = useMemo(
    () => ({
      isOpen,
      setIsOpen,
      products,
      setProducts,
      total,
      setTotal,
    }),
    [isOpen, products, total]
  );
  return <CartContext.Provider value={CartContextValue} {...props} />;
}
