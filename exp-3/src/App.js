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

// Equivalent code using class components:
/*

class App extends Component {
  constructor() {
    super();
    this.state = {
      basicPay: "",
      totalSalary: 0,
      grade: "",
      bonus: 0
    };
  }

  calculateSalary = () => {
    const bp = parseFloat(this.state.basicPay);
    const da = 0.3 * bp;
    const hra = 0.1 * bp;
    const sa = 0.05 * bp;
    const total = bp + da + hra + sa;

    this.setState({ totalSalary: total });
  };

  checkGrade = () => {
    const ts = this.state.totalSalary;
    let g = "";

    if (ts >= 10000 && ts <= 20000) g = "A";
    else if (ts <= 30000) g = "B";
    else if (ts <= 40000) g = "C";
    else if (ts > 40000) g = "EXC";

    this.setState({ grade: g });
  };

  checkBonus = () => {
    const bp = parseFloat(this.state.basicPay);
    let b = 0;

    if (this.state.grade === "A") b = 0.15 * bp;
    else if (this.state.grade === "B") b = 0.12 * bp;
    else if (this.state.grade === "C") b = 0.06 * bp;
    else if (this.state.grade === "EXC") b = 0.05 * bp;

    this.setState({ bonus: b });
  };

  render() {
    return (
      <div className="container">
        <h2>Employee Tax Calculator</h2>

        <input
          type="number"
          placeholder="Enter Basic Pay"
          value={this.state.basicPay}
          onChange={(e) => this.setState({ basicPay: e.target.value })}
        />

        <button onClick={this.calculateSalary}>Calculate Salary</button>
        <p>Total Salary: {this.state.totalSalary}</p>

        <button onClick={this.checkGrade}>Check Grade</button>
        <p>Grade: {this.state.grade}</p>

        <button onClick={this.checkBonus}>Check Bonus</button>
        <p>Bonus: {this.state.bonus}</p>
      </div>
    );
  }
}

export default App;
*/