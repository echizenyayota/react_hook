import React, { useState, useMemo } from "react";

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // 引数の数値を2倍にして返す
  // 不要なループを実行しているためかなりの時間がかかる
  const double = (count) => {
    let i = 0;
    while (i < 10000) {
      i++;
    }
    return count * 2;
  };

  // count2 を2倍にした値をメモ化する
  // 第2引数にcount2を渡しているため、count2を更新した時のみ再計算される
  const doubleCount = useMemo(() => double(count2), [count2]);

  return (
    <>
      <h2>Increment (fast)</h2>
      <p>Counter: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>
      <h2>Increment (slow)</h2>
      <p>
        Counter: {count2}, {doubleCount}
      </p>
      <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
    </>
  );
}
