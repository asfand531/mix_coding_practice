import { useMemo, useState } from "react";
import Child from "./Child";

function UnnecessaryChildRenders() {
  const [count, setCount] = useState(0);

  const user = useMemo(() => ({ name: "Audi" }), []);

  return (
    <>
      <Child user={user} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default UnnecessaryChildRenders;
