import { useMemo, useCallback, useState, useReducer } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const products = [
    { id: 1, name: "Daler", age: 17 },
    { id: 2, name: "Nekruz", age: 16 },
    { id: 3, name: "Husan", age: 14 },
    { id: 4, name: "Elbek", age: 15 },
    { id: 5, name: "Behruz", age: 12 },
  ];

  const total = useMemo(() => {
    console.log("Hisoblanmoqda...");

    return products.reduce((total, product) => (total += product.age), 0);
  }, []);

  return (
    <div className="container flex items-center justify-center gap-3">
      <h2>Jami yoshi: {total}</h2>

      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default App;
