import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleAddition = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  const handleSubtraction = () => {
    const difference = parseFloat(num1) - parseFloat(num2);
    setResult(difference);
  };

  const handleMultiplication = () => {
    const product = parseFloat(num1) * parseFloat(num2);
    setResult(product);
  };

  const handleDivision = () => {
    const quotient = parseFloat(num1) / parseFloat(num2);
    setResult(quotient);
  };

  return (
    <div className="calculator-container">
      <h3 className="heading-cal">Calculator using React.js</h3>
      <div className="input-container">
        <label className="input-value">Enter the value of Number1 :</label>
        <input type="number" value={num1} onChange={handleNum1Change} />
        <label className="input-value">Enter the value of Number2 :</label>
        <input type="number" value={num2} onChange={handleNum2Change} />
      </div>

      <div className="operation-container">
        <button onClick={handleAddition}>Adddition(+)</button>
        <button onClick={handleSubtraction}>Subtraction(-)</button>
        <button onClick={handleMultiplication}>Multiplication(*)</button>
        <button onClick={handleDivision}>Division(/)</button>
      </div>

      <p className="result">Result: {result}</p>
    </div>
  );
}

export default App;
