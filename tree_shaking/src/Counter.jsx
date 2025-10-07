import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Counter loaded!");
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>⚡ Caching Demo</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <p>Try going offline and reload the page!</p>
    </div>
  );
}

export default Counter;
