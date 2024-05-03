import "./App.css";
import Counter from "./components/Counter";
import Exponent from "./components/Exponent";
import { useState } from "react";



function App() {

  const [count, setCount] = useState(1);

  const decrement = () => { if (count > 1) setCount((prevCount) => prevCount - 1) };
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="App">
      <h2><em>Counter</em></h2>

      <Counter count={count} decrement={decrement} increment={increment} />

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <Exponent base={count} exponent={2} />
        <Exponent base={count} exponent={3} />
        <Exponent base={count} exponent={4} />
        <Exponent base={count} exponent={5} />
        <Exponent base={count} exponent={6} />
      </div>
    </div>
  );
}

export default App;
