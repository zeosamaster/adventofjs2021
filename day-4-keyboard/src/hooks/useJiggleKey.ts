import React from "react";
import { getRandom } from "../utils/keyboard";

interface Props {
  rightKey: () => void;
  wrongKey: () => void;
}

interface State {
  jiggle: string;
  keyPressed: string;
}

export const useJiggleKey = ({ rightKey, wrongKey }: Props): State => {
  const [jiggle, setJiggle] = React.useState("");
  const [keyPressed, setKeyPressed] = React.useState("");

  const getNewKey = React.useCallback(() => {
    setJiggle((currentJiggle) => {
      let newJiggleKey;
      while ((newJiggleKey = getRandom()) === currentJiggle) {}
      return newJiggleKey;
    });
  }, []);

  const onKeyPress = React.useCallback(
    (e: any) => {
      if (e.key.toUpperCase() === jiggle) {
        rightKey();
        getNewKey();
      } else {
        wrongKey();
        setKeyPressed(e.key.toUpperCase());
      }
    },
    [jiggle] // eslint-disable-line react-hooks/exhaustive-deps
  );

  React.useEffect(() => {
    getNewKey();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    document.addEventListener("keydown", onKeyPress);
    return () => document.removeEventListener("keydown", onKeyPress);
  }, [onKeyPress]);

  React.useEffect(() => {
    if (!keyPressed) {
      return;
    }
    const timeout = setTimeout(() => setKeyPressed(""), 300);
    return () => clearTimeout(timeout);
  }, [keyPressed]);

  return { jiggle, keyPressed };
};
