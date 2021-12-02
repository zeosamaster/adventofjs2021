import React from "react";
import { useForm } from "react-hook-form";

import { TimerContext } from "../../context/timer-context";

import "./TimerDisplay.css";

interface Props {
  isEditing: boolean;
}

function formatPart(part: number) {
  return `00${part}`.slice(-2);
}

function splitTime(time: number) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time - minutes * 60);
  return [formatPart(minutes), formatPart(seconds)];
}

export function TimerDisplay({ isEditing }: Props) {
  const { timer, resetTimer } = React.useContext(TimerContext);
  const { register, watch, setValue } = useForm();

  React.useEffect(() => {
    const [minutes, seconds] = splitTime(timer);
    setValue("minutes", minutes);
    setValue("seconds", seconds);
  }, [timer, setValue]);

  const minutesState = watch("minutes");
  const secondsState = watch("seconds");

  return (
    <div className="time">
      <div className="minutes">
        <input
          {...register("minutes", {
            pattern: /\d{2}/,
            maxLength: 2,
            onBlur: (e) => {
              const value = e.target.value;
              const mins = value.length > 2 ? 0 : Number(value);
              const secs = Number(secondsState);
              if (!value || value.length > 2) {
                setValue("minutes", "00");
              }
              resetTimer(mins * 60 + secs);
            },
          })}
          type="text"
          disabled={!isEditing}
        />
      </div>
      <div className="colon">:</div>
      <div className="seconds">
        <input
          {...register("seconds", {
            pattern: /\d{2}/,
            onBlur: (e) => {
              const value = e.target.value;
              const mins = Number(minutesState);
              const secs = value.length > 2 ? 0 : Number(value);
              if (!value || value.length > 2) {
                setValue("seconds", "00");
              }
              resetTimer(mins * 60 + secs);
            },
          })}
          type="text"
          disabled={!isEditing}
        />
      </div>
    </div>
  );
}
