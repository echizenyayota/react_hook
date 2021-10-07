import React, { useState, useCallback } from "react";

export default function App() {
  console.log("render App");

  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log("memolized callback");
  }, []);
  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={handleClick}>logging</button>
    </>
  );
}
