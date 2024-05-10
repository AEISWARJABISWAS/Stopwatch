import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const App = () => {
  const [value, setValue] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let timerId = useRef(null);
  const startTimer = () => {
    setIsRunning(true);
  };
  const stopTimer = () => {
    setIsRunning(false);
  };
  const reset = () => {
    setIsRunning(false);
    setValue(0);
  };

  useEffect(() => {
    // let timerId=0;

    if (isRunning) {
      timerId.current = setInterval(() => {
        setValue((prevValue) => prevValue + 1);
      }, 1000);
    } else {
      clearInterval(timerId.current);
    }

    return () => {
      clearInterval(timerId.current);
    };
  }, [isRunning]);

  return (
    <div>
      <h1>Counter</h1>
      <h2>{value}</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer} disabled={value === 0}>
        Stop
      </button>
      <button onClick={reset} disabled={value === 0}>
        Reset
      </button>
    </div>
  );
};

export default App;
