import React from "react";

import { CartContext } from "../../context/cart-context";
import { Section } from "../Section";
import { CartList } from "./CartList";
import { CartTotal } from "./CartTotal";
import { EmptyCart } from "./EmptyCart";

import "./Cart.css";

export function Cart() {
  const { cartItems, subtotal } = React.useContext(CartContext);

  return (
    <Section id="cart" title="Your Cart">
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <CartList cartItems={cartItems} />
          <CartTotal subtotal={subtotal} />
        </>
      )}
    </Section>
  );
}
