import React, {useContext } from 'react';

export type Cart = {
  id: number,
  name: string,
  price: number,
  stock: number,
  image: string
};

type CartContextValue = {
  cart: Cart[] | [];
  addCart: (item: Cart) => void;
};

export const CartContext = React.createContext<CartContextValue>({} as CartContextValue);

export const useCart = () => {
  return useContext(CartContext)
}
