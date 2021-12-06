import React from "react";
import { ScoreContext } from "../context/score-context";

export function Score() {
  const { score } = React.useContext(ScoreContext);

  return <div className="score">Score: {score}</div>;
}
