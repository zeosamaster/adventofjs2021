import React from "react";
import { Item } from "../types/item";
import { addItemAction, removeItemAction } from "./cart-actions";
import { cartReducer, State } from "./cart-reducer";

interface CartContextType extends State {
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
}

export const CartContext = React.createContext<CartContextType>({
  cartItems: [],
  itemsOnCart: {},
  subtotal: 0,
  addItem: () => {},
  removeItem: () => {},
});

export function CartContextProvider({ children }: React.PropsWithChildren<{}>) {
  const [{ cartItems, itemsOnCart, subtotal }, dispatch] = React.useReducer(
    cartReducer,
    {
      cartItems: [],
      itemsOnCart: {},
      subtotal: 0,
    }
  );

  const addItem = React.useCallback(
    (item: Item) => {
      dispatch(addItemAction(item));
    },
    [dispatch]
  );

  const removeItem = React.useCallback(
    (item: Item) => {
      dispatch(removeItemAction(item));
    },
    [dispatch]
  );

  const value = {
    cartItems,
    itemsOnCart,
    subtotal,
    addItem,
    removeItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
