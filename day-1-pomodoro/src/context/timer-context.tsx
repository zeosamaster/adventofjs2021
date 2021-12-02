import React from "react";

interface TimerContextType {
  total: number;
  timer: number;
  isRunning: boolean;
  resetTimer: (value: number) => void;
  startTimer: () => void;
  stopTimer: () => void;
}

const defaultTimer = 15 * 60;

export const TimerContext = React.createContext<TimerContextType>({
  total: defaultTimer,
  timer: defaultTimer,
  isRunning: false,
  resetTimer: () => {},
  startTimer: () => {},
  stopTimer: () => {},
});

interface State {
  total: number;
  timer: number;
  interval: NodeJS.Timeout | null;
}

export function TimerContextProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const [state, setState] = React.useState<State>({
    total: defaultTimer,
    timer: defaultTimer,
    interval: null,
  });

  const resetTimer = React.useCallback((value: number) => {
    setState((s) => ({ ...s, total: value, timer: value }));
  }, []);

  const decrement = React.useCallback(() => {
    setState((s) => {
      if (s.timer > 0) {
        return { ...s, timer: s.timer - 1 };
      } else {
        clearInterval(s.interval!);
        return { ...s, interval: null };
      }
    });
  }, [setState]);

  const startTimer = React.useCallback(() => {
    const i = setInterval(decrement, 1000);
    setState((s) => ({ ...s, interval: i }));
  }, [decrement, setState]);

  const stopTimer = React.useCallback(() => {
    setState((s) => {
      clearInterval(s.interval!);
      return { ...s, interval: null };
    });
  }, [setState]);

  const value = {
    total: state.total,
    timer: state.timer,
    isRunning: state.interval !== null,
    resetTimer,
    startTimer,
    stopTimer,
  };

  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
}
