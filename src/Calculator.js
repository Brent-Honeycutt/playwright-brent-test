import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const handleAddition = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtraction = () => {
    setResult(Number(num1) - Number(num2));
  };

  const handleMultiplication = () => {
    setResult(Number(num1) * Number(num2));
  };

  const handleDivision = () => {
    setResult(Number(num1) / Number(num2));
  };

  return (
    <div data-testid="calculator">
      <h2>Calculator</h2>
      <div>
        <label htmlFor="num1">Num 1:</label>
        <input type="number" id="num1" value={num1} onChange={handleNum1Change} />
      </div>
      <div>
        <label htmlFor="num2">Num 2:</label>
        <input type="number" id="num2" value={num2} onChange={handleNum2Change} />
      </div>
      <div>
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>
      </div>
      {result && <p data-testid="calculator-result">Result: {result}</p>}
    </div>
  );
}

export default Calculator;
