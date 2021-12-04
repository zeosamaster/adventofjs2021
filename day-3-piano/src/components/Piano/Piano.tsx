import { play } from "../../utils/piano";
import { blackKeys, whiteKeys } from "./piano-keys";

import "./Piano.css";

export function Piano() {
  return (
    <div className="piano">
      <svg
        width="1387"
        height="467"
        viewBox="0 0 1387 467"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* white keys */}
        {whiteKeys.map((key, i) => (
          <path
            key={`white-${i}`}
            onClick={() => play(i + 1)}
            className="white-keys"
            d={key}
          />
        ))}

        {/* black keys */}
        {blackKeys.map((key, i) => (
          <path
            key={`black-${i}`}
            onClick={() => play(whiteKeys.length + i + 1)}
            className="black-keys"
            d={key}
          />
        ))}
      </svg>
    </div>
  );
}
