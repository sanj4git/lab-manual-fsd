import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const handleSumOfDigits = () => {
    let n = Math.abs(parseInt(number));
    let sum = 0;

    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }

    setResult(`Sum of digits is ${sum}`);
  };

  return (
    <div className="container">
      <h2>Sum of Digits</h2>

      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <button onClick={handleSumOfDigits}>
        Calculate Sum
      </button>

      <div className="result">{result}</div>
    </div>
  );
}

export default App;
