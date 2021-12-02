import React from "react";

import { TimerContext } from "../../context/timer-context";
import { Progress } from "../Progress";
import { TimerDisplay } from "../TimerDisplay";

import "./Timer.css";

export function Timer() {
  const { timer, total, isRunning, startTimer, stopTimer } =
    React.useContext(TimerContext);
  const [isEditing, setIsEditing] = React.useState(false);

  const toggleStart = isRunning ? stopTimer : startTimer;

  const toggleEdit = React.useCallback(() => {
    stopTimer();
    setIsEditing(!isEditing);
  }, [isEditing, setIsEditing, stopTimer]);

  const editButtonImg = isEditing ? (
    <img src="images/check.svg" alt="Done" />
  ) : (
    <img src="images/gear.svg" alt="Settings" />
  );

  return (
    <>
      <Progress timer={timer} total={total} />

      <div className="timer">
        <TimerDisplay isEditing={isEditing} />

        <div style={{ visibility: isEditing ? "hidden" : "visible" }}>
          <button className="start" onClick={toggleStart}>
            {isRunning ? "Stop" : "Start"}
          </button>
        </div>

        <button className="settings" onClick={toggleEdit}>
          {editButtonImg}
        </button>
      </div>
    </>
  );
}
