import React from "react";
import { CartContext } from "../../context/cart-context";
import { Item } from "../../types/item";
import { formatPrice } from "../../utils/format-price";

import "./CartItem.css";

interface Props {
  item: Item;
  quantity: number;
}

export function CartItem({ item, quantity }: Props) {
  const { addItem, removeItem } = React.useContext(CartContext);

  const onAdd = React.useCallback(() => {
    addItem(item);
  }, [addItem, item]);

  const onRemove = React.useCallback(() => {
    removeItem(item);
  }, [removeItem, item]);

  return (
    <div className="cart-item">
      <img
        className="image"
        src={item.image}
        alt={item.title}
        width="70px"
        height="70px"
      />
      <div className="item">
        <div className="title">{item.title}</div>
        <div className="price">{formatPrice(item.price)}</div>
        <div className="summary">
          <div className="quantity">
            <button className="chevron less" onClick={onRemove}>
              <img src="/images/chevron.svg" alt="less" />
            </button>
            <div className="value">{quantity}</div>
            <button className="chevron more" onClick={onAdd}>
              <img src="/images/chevron.svg" alt="more" />
            </button>
          </div>
          <div className="total">{formatPrice(quantity * item.price)}</div>
        </div>
      </div>
    </div>
  );
}
