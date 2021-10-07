import React, { useState, useCallback } from "react";

const Child = ({ handleClick }) => {
  console.log("render child");
  return <button onClick={handleClick}>Child</button>;
};

export default function App() {
  console.log("render App");

  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log("click");
  }, []);
  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <Child handleClick={handleClick} />
    </>
  );
}
