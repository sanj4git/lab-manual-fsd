import React, { useState } from "react";

function App(){

  const [selectedOption, setSelectedOption] = useState("");
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  // Factorial
  const handleFactorial = () => {

    let n = parseInt(number);

    if(n < 0){
      setResult("Factorial not defined for -ve number.");
      return;
    }

    let fact = 1;
    for(let i = 1; i <= n; i++){
      fact *= i;
    }

    setResult(`Factorial of ${n} is ${fact}`);

  };

  // Fibonacci
  const handleFibonacci = () => {

    let n = parseInt(number);

    if(n <= 0){
      setResult("Please enter a positive number");
      return;
    }

    let fib = [];
    let a = 0, b = 1;

    for(let i = 0; i < n; i++){
      fib.push(a);
      let temp = a + b;
      a = b;
      b = temp;
    }

    setResult(fib.join(", "));

  }

  const handlePrimeCheck = () => {

    let n = parseInt(number);

    if(n <= 1){
      setResult("Neither Prime nor Composite");
      return;
    }

    for(let i = 2; i <= Math.sqrt(n); i++){

      if(n % i === 0){
        setResult("Composite");
        return;
      }

    }

    setResult("Prime");

  };


  return (
    <div className="container">
      <h2>Math Tools</h2>

      <select onChange={(e) => {
        setSelectedOption(e.target.value);
        setResult("");
        setNumber("");
      }}>
        <option value="">Select Operation</option>
        <option value="factorial">Factorial</option>
        <option value="fibonacci">Fibonacci</option>
        <option value="prime">Prime Check</option>
      </select>

      {selectedOption && (
        <>
          <input
            type="number"
            placeholder="Enter number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />

          {selectedOption === "factorial" && (
            <button onClick={handleFactorial}>Calculate Factorial</button>
          )}

          {selectedOption === "fibonacci" && (
            <button onClick={handleFibonacci}>Generate Fibonacci</button>
          )}

          {selectedOption === "prime" && (
            <button onClick={handlePrimeCheck}>Check Prime</button>
          )}

          <div className="result">{result}</div>
        </>
      )}
    </div>
  );
}

export default App;
