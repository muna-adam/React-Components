import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={handleIncrement}>Increment</button>

      <button onClick={handleDecrement} disabled={count === 0}>Decrement</button>
    </div>
  );
}

export default Counter;