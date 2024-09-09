import React, { useState } from "react";

const DateCounter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <>
      <input
        type="range"
        min="0"
        max="10"
        onChange={(e) => setStep(Number(e.target.value))}
        value={step}
      />{" "}
      <span>{step}</span>
      <br />
      <button onClick={() => setCount(count - step)}>-</button>
      <input
        type="text"
        onChange={(e) => setCount(Number(e.target.value))}
        value={count}
      />
      <button onClick={() =>setCount(count + step)}>+</button>
      
      <p>
        {count === 0
          ? `Today is ${date.toDateString()}`
          : count > 0
          ? `${count} days from now is ${date.toDateString()}`
          : `${count} days ago was ${date.toDateString}`}
      </p>
    </>
  );
};

export default DateCounter;
