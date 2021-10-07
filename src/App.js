import React, { useState } from "react";

// App コンポーネントが再レンダーされるたびに再レンダーされる
function Child({ count }) {
  console.log("render child");
  return <p>Child: {count} </p>;
}

export default function App() {
  console.log("render App");
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <button onClick={() => setCount1(count1 + 1)}>countUp App count</button>
      <button onClick={() => setCount2(count2 + 1)}>countUp Child count</button>
      <p>App: {count1}</p>
      <Child count={count2} />
    </>
  );
}
