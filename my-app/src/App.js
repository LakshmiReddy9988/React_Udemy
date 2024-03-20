import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(1);
  const [step, setStep] = useState(0);

  const date = new Date("june 21 2023");
  date.setDate(date.getDate() + count);

  function handleReset() {
    setStep(0);
    setCount(1);
  }

  return (
    <div>
      <div>
        {/* <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button> */}
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>

      <div>
        <button onClick={() => setCount((c) => c - 1)}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        {/* <span>Counter: {count}</span> */}
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${count} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {count !== 1 || step !== 0 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </div>
  );
}

export default App;
