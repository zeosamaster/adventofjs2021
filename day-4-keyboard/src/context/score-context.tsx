import React from "react";

interface State {
  score: number;
  delta: number | null;
  date: Date;
}

interface ScoreContextType extends Pick<State, "score" | "delta"> {
  rightKey: () => void;
  wrongKey: () => void;
}

export const ScoreContext = React.createContext<ScoreContextType>({
  score: 0,
  delta: null,
  rightKey: () => {},
  wrongKey: () => {},
});

export function ScoreContextProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const [state, setState] = React.useState<State>({
    score: 0,
    delta: 0,
    date: new Date(),
  });

  const rightKey = React.useCallback(() => {
    setState((state) => {
      const diff = new Date().getTime() - state.date.getTime();
      const newDelta = Math.floor((100 * 1000) / Math.min(diff / 2, 1000));
      return {
        score: state.score + newDelta,
        delta: newDelta,
        date: new Date(),
      };
    });
  }, []);

  const wrongKey = React.useCallback(() => {
    setState((state) => {
      const newDelta = Math.max(-200, -state.score);
      return { ...state, score: state.score + newDelta, delta: newDelta };
    });
  }, []);

  React.useEffect(() => {
    if (state.delta === 0) {
      return;
    }
    const timeout = setTimeout(() => {
      setState((state) => ({ ...state, delta: null }));
    }, 200);
    return () => clearTimeout(timeout);
  }, [state.delta]);

  const value = {
    score: state.score,
    delta: state.delta,
    rightKey,
    wrongKey,
  };

  return (
    <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>
  );
}
