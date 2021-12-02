import React from "react";
import "./Progress.css";

interface Props {
  total: number;
  timer: number;
}

export function Progress({ total, timer }: Props) {
  const radius = 259;
  const strokeWidth = 10;

  var c = Math.PI * (radius * 2);
  var pct = Math.floor((timer / total) * c) + "px";

  const classes = ["ring", ...(timer < 10 ? ["ending"] : [])];

  return (
    <div className={classes.join(" ")}>
      <svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
      >
        <circle
          strokeWidth={strokeWidth}
          x="0"
          y="0"
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          strokeDasharray={2 * Math.PI * radius}
          strokeDashoffset={pct}
        />
      </svg>
    </div>
  );
}
