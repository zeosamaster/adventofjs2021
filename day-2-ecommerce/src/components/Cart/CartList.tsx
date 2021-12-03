import { CartItem as CartItemType } from "../../types/item";
import { CartItem } from "./CartItem";

interface Props {
  cartItems: CartItemType[];
}

export function CartList({ cartItems }: Props) {
  return (
    <div className="cart-list">
      {cartItems.map(({ item, quantity }) => (
        <CartItem key={item.title} item={item} quantity={quantity} />
      ))}
    </div>
  );
}
