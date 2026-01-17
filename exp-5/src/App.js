import React, { useState } from "react";
import "./App.css";

function App() {
  // -------- Calculator State --------
  const [display, setDisplay] = useState("");
  const [firstValue, setFirstValue] = useState(null);
  const [operator, setOperator] = useState(null);

  // -------- Game State --------
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [op, setOp] = useState("+");
  const [guess, setGuess] = useState("");
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  // -------- Calculator Logic (NO eval) --------
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

  const clearCalc = () => {
    setDisplay("");
    setFirstValue(null);
    setOperator(null);
  };

  // -------- Game Logic --------
  const generateQuestion = () => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    const ops = ["+", "-", "*"];
    const chosenOp = ops[Math.floor(Math.random() * ops.length)];

    setNum1(a);
    setNum2(b);
    setOp(chosenOp);
    setGuess("");
    setMessage("");
  };

  const checkAnswer = () => {
    let correct = 0;
    if (op === "+") correct = num1 + num2;
    else if (op === "-") correct = num1 - num2;
    else if (op === "*") correct = num1 * num2;

    if (Number(guess) === correct) {
      setScore(score + 10);
      setMessage("✅ Correct! +10 points");
    } else {
      setMessage(`❌ Wrong! Correct answer: ${correct}`);
    }
  };

  return (
    <div className="main">
      {/* -------- Calculator -------- */}
      <div className="calculator">
        <h2>Calculator</h2>
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
          <button onClick={clearCalc}>C</button>
          <button onClick={calculate}>=</button>
          <button onClick={() => handleOperator("+")}>+</button>
        </div>
      </div>

      {/* -------- Game -------- */}
      <div className="game">
        <h2>Guess the Answer</h2>
        <p className="score">Score: {score}</p>

        <div className="question">
          {num1} {op} {num2} = ?
        </div>

        <input
          type="number"
          placeholder="Your guess"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />

        <button onClick={checkAnswer}>Check</button>
        <button onClick={generateQuestion}>New Question</button>

        <p className="message">{message}</p>
      </div>
    </div>
  );
}

export default App;
