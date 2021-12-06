import React from "react";
import "./App.css";
import { Keyboard } from "./components/Keyboard";
import { ScoreContextProvider } from "./context/score-context";

function App() {
  return (
    <ScoreContextProvider>
      <Keyboard />
    </ScoreContextProvider>
  );
}

export default App;
