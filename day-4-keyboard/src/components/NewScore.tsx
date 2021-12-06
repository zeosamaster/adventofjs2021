import React from "react";
import { ScoreContext } from "../context/score-context";

export function NewScore() {
  const { delta } = React.useContext(ScoreContext);
  const [localDelta, setLocalDelta] = React.useState(0);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (delta === null) {
      return;
    }

    setLocalDelta(delta);
    setVisible(true);
    const timeout = setTimeout(() => setVisible(false), 200);
    return () => clearTimeout(timeout);
  }, [delta]);

  const className = [
    "new-score",
    localDelta >= 0 ? "positive" : "negative",
    visible ? "visible" : "hidden",
  ].join(" ");

  return (
    <div className={className}>
      {localDelta > 0 ? "+" : ""}
      {localDelta}
    </div>
  );
}
