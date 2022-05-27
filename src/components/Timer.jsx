import React, { useRef, useState } from "react";
const Timer = () => {
  const timerId = useRef(null);
  const timerMl = useRef(null);
  const [watch, setWatch] = useState(0);
  const [mlSecond, setMlSecond] = useState(0);

  const start = () => {
    if (!timerId.current) {
      let id = setInterval(() => {
        setWatch((prev) => prev + 1);
      }, 1000);
      let ml = setInterval(() => {
        setMlSecond((prev) => prev + 1);
      }, 100);
      timerId.current = id;
      timerMl.current = ml;
    }
  };
  const pause = () => {
    clearInterval(timerId.current);
    timerId.current = null;
    clearInterval(timerMl.current);
    timerMl.current.ml = null;
  };

  const reset = () => {
    clearInterval(timerId.current);
    clearInterval(timerMl.current);
    setWatch(0);
    setMlSecond(0);
    timerId.current = null;
    timerMl.current = null;
  };
  return (
    <div>
      <h2>Stopwatch</h2>
      <h1>
        {watch}: {mlSecond}
      </h1>
      <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
