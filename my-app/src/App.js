import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);

  const messages = ["Welcome to step1", "Click next to proceed", "Thank you!"];

  return (
    <div className="steps">
      <div className="numbers">
        <div className="active">1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      <p className="message">
        Step {step} : {messages[step - 1]}
      </p>

      <div className="buttons">
        <button
          onClick={() => {
            if (step > 1) setStep((step) => step - 1);
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            if (step < 3) setStep((step) => step + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
