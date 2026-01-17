import React, { useState } from "react";
import "./App.css";


function App() {
  const [basicPay, setBasicPay] = useState("");
  const [totalSalary, setTotalSalary] = useState(0);
  const [grade, setGrade] = useState("");
  const [bonus, setBonus] = useState(0);

  const calculateSalary = () => {
    let bp = parseFloat(basicPay);
    let da = 0.3 * bp;
    let hra = 0.1 * bp;
    let sa = 0.05 * bp;
    setTotalSalary(bp + da + hra + sa);
  };

  const checkGrade = () => {
    if (totalSalary >= 10000 && totalSalary <= 20000) setGrade("A");
    else if (totalSalary <= 30000) setGrade("B");
    else if (totalSalary <= 40000) setGrade("C");
    else setGrade("EXC");
  };

  const checkBonus = () => {
    let bp = parseFloat(basicPay);
    let b = 0;
    if (grade === "A") b = 0.15 * bp;
    else if (grade === "B") b = 0.12 * bp;
    else if (grade === "C") b = 0.06 * bp;
    else if (grade === "EXC") b = 0.05 * bp;
    setBonus(b);
  };

  return (
    <div className="container">
      <h2>Employee Tax Calculator</h2>

      <input
        type="number"
        placeholder="Enter Basic Pay"
        value={basicPay}
        onChange={(e) => setBasicPay(e.target.value)}
      />

      <button onClick={calculateSalary}>Calculate Salary</button>
      <p>Total Salary: {totalSalary}</p>

      <button onClick={checkGrade}>Check Grade</button>
      <p>Grade: {grade}</p>

      <button onClick={checkBonus}>Check Bonus</button>
      <p>Bonus: {bonus}</p>
    </div>
  );
}

export default App;
