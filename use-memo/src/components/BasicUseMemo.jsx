import React, { useState, useMemo } from "react";
const numberList = [1, 2, 1, 4, 0, 6];
const mapScores = (scores, caller) => {
  console.log("Llamamos a esta función", caller);
  return scores.map((num, index) => {
    const calc = (num * 3) / 2;
    const color = calc < 3 ? "🔴" : "🟢";
    return (
      <p key={index}>
        {calc} {color}
      </p>
    );
  });
};

const BasicUseMemo = () => {
  const [rerender, setRerender] = useState(false);
  const marksContent = mapScores(numberList, "no-useMemo");
  const marksContentMemo = useMemo(() => {
    return mapScores(numberList, "useMemo");
  }, []);
  return (
    <div>
      <div>
        <h3>No useMemo</h3>
        {marksContent}
      </div>
      <div>
        <h3>useMemo</h3>
        {marksContentMemo}
      </div>
      <button onClick={() => setRerender(!rerender)}>Rerender</button>
    </div>
  );
};
export default BasicUseMemo;
