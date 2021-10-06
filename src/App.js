import React, { useState, useEffect } from "react";

const LIMIT = 60;

// カウントダウンするコンポーネント
function Timer() {
  // カウント
  const [timeLeft, setTimeLeft] = useState(LIMIT);

  // timeLeft をリセット
  const reset = () => {
    setTimeLeft(LIMIT);
  };

  // timeListを更新する
  const tick = () => {
    console.log("tick");
    setTimeLeft((prevTime) => (prevTime === 0 ? LIMIT : prevTime - 1));
  };

  useEffect(() => {
    console.log("create timer");
    const timerId = setInterval(tick, 1000);

    return () => {
      console.log("cleanUp Timer");
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <p>time: {timeLeft} </p>
      <button onClick={reset}>reset</button>
    </div>
  );
}
function App() {
  // コンポーネントを読み込むかどうかのフラグ
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Toggle Timer</button>
      {visible ? <Timer /> : ""}
    </div>
  );
}

export default App;
