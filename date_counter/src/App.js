import { useState } from "react";
function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  function Steps(pos) {
    if (pos === true) return setStep((prestep) => prestep + 1);
    if (pos === false) return setStep((prestep) => prestep - 1);
  }

  function Count(pos) {
    if (pos === true) return setCount((precount) => precount + step);
    if (pos === false) return setCount((precount) => precount - step);
  }

  function updateDate() {
    const date = new Date();
    date.setDate(date.getDate() + count);
    return date.toDateString();
  }

  return (
    <div className="continer">
      <div className="counters">
        <button onClick={() => Steps(false)}>-</button>
        <h1>steps: {step}</h1>
        <button onClick={() => Steps(true)}>+</button>
      </div>
      <div className="counters">
        <button onClick={() => Count(false)}>-</button>
        <h1>Count: {count}</h1>
        <button onClick={() => Count(true)}>+</button>
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
