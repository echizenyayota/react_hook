import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(10);

  const decrement = () => {
    // function
    setCount((currentCount) => count - 1);
  };

  const increment = () => {
    setCount((currentCount) => count + 1);
  };

  return (
    <>
      <p>Count : {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </>
  );
}
