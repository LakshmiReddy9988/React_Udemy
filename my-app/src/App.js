import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function resetHandler() {
    setBill(0);
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSelect={setBill} />
      <PercentageInput percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </PercentageInput>
      <PercentageInput percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?
      </PercentageInput>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset resetHandler={resetHandler} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSelect }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => onSelect(Number(e.target.value))}
        placeholder="Bill Value"
      />
    </div>
  );
}

function PercentageInput({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

function Reset({ resetHandler }) {
  return <button onClick={resetHandler}>Reset</button>;
}

export default App;
