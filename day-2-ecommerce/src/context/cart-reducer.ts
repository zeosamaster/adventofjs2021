import { CartItem, Item } from "../types/item";
import { ActionType, CartAction } from "./cart-actions";

export interface State {
  cartItems: CartItem[];
  itemsOnCart: Record<string, boolean>;
  subtotal: number;
}

function addNewItem(cartItems: CartItem[], item: Item): CartItem[] {
  return [...cartItems, { item, quantity: 1 }];
}

function incrementQuantity(cartItems: CartItem[], item: Item): CartItem[] {
  return cartItems.map((cartItem) => {
    if (cartItem.item.id === item.id) {
      return { ...cartItem, quantity: cartItem.quantity + 1 };
    }
    return cartItem;
  });
}

function decrementQuantity(cartItems: CartItem[], item: Item): CartItem[] {
  return cartItems.reduce((newCartItems: CartItem[], cartItem: CartItem) => {
    if (cartItem.item.id === item.id) {
      const { quantity } = cartItem;
      return quantity === 1
        ? newCartItems
        : [{ ...cartItem, quantity: cartItem.quantity - 1 }];
    }
    return [...newCartItems, cartItem];
  }, []);
}

export function cartReducer(state: State, action: CartAction): State {
  switch (action.type) {
    case ActionType.ADD_ITEM: {
      const { cartItems, itemsOnCart, subtotal } = state;
      const { item } = action.payload;

      const itemInCartIndex = cartItems.findIndex(
        (cartItem) => cartItem.item === item
      );

      const newItems =
        itemInCartIndex > -1
          ? incrementQuantity(cartItems, item)
          : addNewItem(cartItems, item);

      const newItemsOnCart = { ...itemsOnCart, [item.id]: true };

      return {
        ...state,
        cartItems: newItems,
        itemsOnCart: newItemsOnCart,
        subtotal: subtotal + item.price,
      };
    }

    case ActionType.REMOVE_ITEM: {
      const { cartItems, itemsOnCart, subtotal } = state;
      const { item } = action.payload;

      const itemInCartIndex = cartItems.findIndex(
        (cartItem) => cartItem.item === item
      );

      const newItems =
        itemInCartIndex > -1 ? decrementQuantity(cartItems, item) : cartItems;

      const newItemsOnCart = { ...itemsOnCart };
      newItemsOnCart[item.id] = newItems.length === cartItems.length;

      return {
        ...state,
        cartItems: newItems,
        itemsOnCart: newItemsOnCart,
        subtotal: subtotal - item.price,
      };
    }

    default:
      return state;
  }
}
