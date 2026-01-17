import React, { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");
  const [firstValue, setFirstValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumber = (num) => {
    setDisplay(display + num);
  };

  const handleOperator = (op) => {
    if (display === "") return;
    setFirstValue(Number(display));
    setOperator(op);
    setDisplay("");
  };

  const calculate = () => {
    if (firstValue === null || operator === null || display === "") return;

    const secondValue = Number(display);
    let result = 0;

    if (operator === "+") result = firstValue + secondValue;
    else if (operator === "-") result = firstValue - secondValue;
    else if (operator === "*") result = firstValue * secondValue;
    else if (operator === "/") result = secondValue !== 0 ? firstValue / secondValue : 0;

    setDisplay(result.toString());
    setFirstValue(null);
    setOperator(null);
  };

  const clearAll = () => {
    setDisplay("");
    setFirstValue(null);
    setOperator(null);
  };

  return (
    <div className="calculator">
      <h2>Simple Calculator</h2>

      <input type="text" value={display} readOnly />

      <div className="buttons">
        <button onClick={() => handleNumber("7")}>7</button>
        <button onClick={() => handleNumber("8")}>8</button>
        <button onClick={() => handleNumber("9")}>9</button>
        <button onClick={() => handleOperator("/")}>÷</button>

        <button onClick={() => handleNumber("4")}>4</button>
        <button onClick={() => handleNumber("5")}>5</button>
        <button onClick={() => handleNumber("6")}>6</button>
        <button onClick={() => handleOperator("*")}>×</button>

        <button onClick={() => handleNumber("1")}>1</button>
        <button onClick={() => handleNumber("2")}>2</button>
        <button onClick={() => handleNumber("3")}>3</button>
        <button onClick={() => handleOperator("-")}>−</button>

        <button onClick={() => handleNumber("0")}>0</button>
        <button onClick={clearAll}>C</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => handleOperator("+")}>+</button>
      </div>
    </div>
  );
}

export default App;
