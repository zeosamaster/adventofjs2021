import React from "react";
import "./App.css";
import { initialState, reducer } from "./reducer";

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const tip = (Number(state.bill) * Number(state.tipPercentage)) / 100;
  const totalPerPerson = (Number(state.bill) + tip) / Number(state.people);

  return (
    <div className="wrapper">
      <div className="tip-amount">
        <div className="label">Tip Amount</div>
        <div className="dollars">
          <sup>$</sup>
          <span id="tip-amount">{tip.toFixed(2)}</span>
        </div>
      </div>
      <div className="total-per-person">
        <div className="label">Total Per Person</div>
        <div className="dollars">
          <sup>$</sup>
          <span id="total-per-person">{totalPerPerson.toFixed(2)}</span>
        </div>
      </div>

      <div className="input-fields">
        <div className="bill-amount">
          <div className="field">
            <input
              type="text"
              id="bill-amount"
              name="bill-amount"
              value={state.bill}
              onChange={(e) =>
                dispatch({ type: "UPDATE_BILL", value: e.target.value })
              }
            />
          </div>
          <div className="label">Bill Amount</div>
        </div>
        <div className="number-of-people">
          <div className="field">
            <input
              type="text"
              id="number-of-people"
              name="number-of-people"
              value={state.people}
              onChange={(e) =>
                dispatch({ type: "UPDATE_PEOPLE", value: e.target.value })
              }
            />
          </div>
          <div className="label">Number of People</div>
        </div>
      </div>

      <div className="tip-percentages">
        {[5, 10, 15, 20].map((tipValue) => {
          return (
            <div key={tipValue}>
              <input
                type="radio"
                name="tip"
                value={tipValue}
                id={tipValue}
                checked={state.tipPercentage === tipValue}
                onChange={() =>
                  dispatch({ type: "UPDATE_TIP_PERCENTAGE", value: tipValue })
                }
              />
              <label htmlFor={tipValue}>{tipValue}%</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
