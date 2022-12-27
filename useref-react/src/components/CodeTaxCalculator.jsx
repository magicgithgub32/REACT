import React, { useRef } from "react";

const CodeTaxCalculator = () => {
  const grossIncomeRef = useRef(null);
  const taxPercentRef = useRef(null);

  const getNetIncome = () => {
    const grossIncome = grossIncomeRef.current?.valueAsNumber;
    const taxPercent = taxPercentRef.current?.valueAsNumber;
    const total = grossIncome * (taxPercent / 100);
    console.log("The value to pay taxes is:", { total });
  };
  
  return (
    <div>
      <h3>Calculator Tax to Pay</h3>
      <label htmlFor="grossIncome">
        <input
          type="number"
          name="grossIncome"
          id="grossIncome"
          defaultValue="0"
          min="0"
          ref={grossIncomeRef}
        />
      </label>
      <br />
      <label htmlFor="tax">
        <input
          type="number"
          name="tax"
          id="tax"
          defaultValue="0"
          max="100"
          ref={taxPercentRef}
        />
      </label>
      <br />
      <button onClick={getNetIncome}>Tax</button>
    </div>
  );
};
export default CodeTaxCalculator;
