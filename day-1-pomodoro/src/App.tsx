import { Timer } from "./components/Timer";

import { TimerContextProvider } from "./context/timer-context";

import "./App.css";

function App() {
  return (
    <TimerContextProvider>
      <div className="wrapper">
        <Timer />
      </div>
    </TimerContextProvider>
  );
}

export default App;
