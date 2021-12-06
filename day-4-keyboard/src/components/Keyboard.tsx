import React from "react";
import { ScoreContext } from "../context/score-context";
import { useJiggleKey } from "../hooks/useJiggleKey";
import { Key } from "./Key";
import { NewScore } from "./NewScore";
import { Score } from "./Score";
import { row1, row2, row3, row4 } from "../utils/keyboard";

export function Keyboard() {
  const { rightKey, wrongKey } = React.useContext(ScoreContext);
  const { jiggle, keyPressed } = useJiggleKey({ rightKey, wrongKey });

  return (
    <div className="keyboard">
      <h1>Eyes on the Screen</h1>
      <Score />
      <NewScore />

      {[row1, row2, row3, row4].map((row, i) => (
        <div className="row" key={i}>
          {row.map((key) => (
            <Key
              key={key.id}
              {...key}
              jiggle={key.id === jiggle}
              keyPressed={key.id === keyPressed}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
