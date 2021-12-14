import React from "react";
import "./App.css";

function App() {
  const [value, setValue] = React.useState(0);

  const onChange = React.useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <div className="wrapper">
      <div className="amount">
        <sup>$</sup>
        <span className="dollars">{Number(value).toFixed(2)}</span>
      </div>
      <input
        type="range"
        id="priceRange"
        min="0"
        max="10000"
        step="0.01"
        value={value}
        onChange={onChange}
      />
      <br />
      <button>Buy Now</button>
    </div>
  );
}

export default App;
