import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCur, setFromCur] = useState("EUR");
  const [toCur, setToCur] = useState("USD");
  const [converted, setConverted] = useState("");

  useEffect(() => {
    async function convert() {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
      );
      const data = await res.json();
      setConverted(data.rates[toCur]);
    }

    convert();
  }, [amount, fromCur, toCur]);

  return (
    <div className="App">
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <Dropdown cur={fromCur} setCur={setFromCur} />

      <Dropdown cur={toCur} setCur={setToCur} />

      <p>
        {converted} {toCur}
      </p>
    </div>
  );
}

function Dropdown({ cur, setCur }) {
  return (
    <select value={cur} onChange={(e) => setCur(e.target.value)}>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>
  );
}

export default App;
