import { useState } from "react";
function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);

  function updateDate() {
    const date = new Date();
    date.setDate(date.getDate() + count);
    return date.toDateString();
  }

  return (
    <div className="continer">
      <div className="counters">
        <h1>steps: {step}</h1>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          className="slider"
        />
      </div>
      <div className="counters">
        <button onClick={() => setCount((prevcount) => prevcount - step)}>
          -
        </button>
        <h1>Count: {count}</h1>
        <input
          type="number"
          min="1"
          max="1000"
          className="infiled"
          // value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((prevcount) => prevcount + step)}>
          +
        </button>
      </div>
      <div>
        <h1>
          {count} days from today is {updateDate()}
        </h1>
      </div>
    </div>
  );
}
function App() {
  return <Counter />;
}

export default App;
