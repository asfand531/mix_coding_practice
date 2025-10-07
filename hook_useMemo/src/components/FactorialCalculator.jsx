import { useMemo, useState } from "react";

function FactorialCalculator() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  const factorialValue = useMemo(() => {
    if (number < 0) return "Undefined";
    if (number === 0) return 1;
    console.log("Calculating factorial...");
    let result = 1;
    for (let i = number; i > 0; i--) {
      result *= i;
    }
    return result;
  }, [number]);

  const handleCount = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <div>
        <span>
          <h2>Count: {count}</h2>
        </span>
        <span>
          <h2>Factorial: {factorialValue}</h2>
        </span>
        <input
          type="number"
          min={0}
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          placeholder="Enter number to get factorial"
        />
        <button onClick={handleCount}>Increase</button>
      </div>
    </>
  );
}

export default FactorialCalculator;
