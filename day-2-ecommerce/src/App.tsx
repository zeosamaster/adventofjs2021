import React from "react";

import { Background } from "./components/Background";
import { Menu } from "./components/Menu";
import { Cart } from "./components/Cart";
import { CartContextProvider } from "./context/cart-context";

import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <CartContextProvider>
          <Menu />
          <Cart />
        </CartContextProvider>
      </div>
      <Background />
    </>
  );
}

export default App;
