import { useState, useCallback } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((inc) => inc + 1);
  });

  const decrement = useCallback(() => {
    setCount((dec) => dec - 1);
  });

  return (
    <div className="container flex justify-center gap-x-4">
      <button onClick={decrement}>-</button>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default App;
