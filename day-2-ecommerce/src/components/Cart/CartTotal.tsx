import { formatPrice } from "../../utils/format-price";

interface Props {
  subtotal: number;
}

const tax = 0.0975;

export function CartTotal({ subtotal }: Props) {
  const taxValue = subtotal * tax;
  const total = subtotal + taxValue;

  return (
    <div className="cart-total">
      <div className="subtotal">
        <div className="label">Subtotal:</div>
        <div className="value">{formatPrice(subtotal)}</div>
      </div>
      <div className="tax">
        <div className="label">Tax:</div>
        <div className="value">{formatPrice(taxValue)}</div>
      </div>
      <div className="total">
        <div className="label">Total:</div>
        <div className="value">{formatPrice(total)}</div>
      </div>
    </div>
  );
}
