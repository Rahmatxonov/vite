import { useMemo, useCallback, useState, useReducer } from "react";
import "./sass/main.css";
import User from "./components/User";
import Header from "./components/Header";

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
    <>
      <h1>Hello React</h1>
    </>
  );
};

export default App;
