import React from "react";
import { CartContext } from "../../context/cart-context";
import { Item } from "../../types/item";
import { formatPrice } from "../../utils/format-price";

import "./MenuItem.css";

const colors = [
  "rgba(120, 247, 187, 0.2)",
  "rgba(215, 215, 249, 0.2)",
  "rgba(233, 121, 178, 0.2)",
  "rgba(122, 179, 243, 0.2)",
];

interface Props extends Item {}

export function MenuItem(item: Props) {
  const { addItem, itemsOnCart } = React.useContext(CartContext);
  const { title, image, price } = item;

  const onAdd = React.useCallback(() => {
    addItem(item);
  }, [addItem, item]);

  const backgroundColor = React.useMemo(
    () => colors[Math.floor(Math.random() * colors.length)],
    []
  );

  return (
    <div className="menu-item" style={{ backgroundColor }}>
      <img
        className="image"
        src={image}
        height="150px"
        width="150px"
        alt={title}
      />
      <div className="summary">
        <div className="title">{title}</div>
        <div className="price">{formatPrice(price)}</div>
        {itemsOnCart[item.id] ? (
          <button className="btn in-cart" disabled>
            <img src="images/check.svg" alt="Check" width="17px" /> In Cart
          </button>
        ) : (
          <button className="btn add-to-cart" onClick={onAdd}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
