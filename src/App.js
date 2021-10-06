import React, { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(document.getElementById("effectHook").innerText);
  });

  return (
    <div>
      <p id="effectHook">You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}
