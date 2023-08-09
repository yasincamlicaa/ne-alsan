
import { ReactNode, useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const cartString = localStorage.getItem("cart");
  let cart = JSON.parse(cartString ?? "[]");



  const [cartState, setCartState] = useState(cart);

  const handleAddToCart = (item: any) => {
    const updatedCart = [...cartState, item];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartState(updatedCart);
  };



  const value = {
    cart: cartState,
    addCart: handleAddToCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
