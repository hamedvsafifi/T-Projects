import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  // const count = 3;
  const [count, setCount] = useState(1);
  const [minimize, setMinimize] = useState(true);
  function handelnext() {
    if (count < 3) setCount((count) => count + 1);
  }
  function handelpervious() {
    if (count > 1) setCount((count) => count - 1);
  }

  return (
    <>
      <button
        className="minimize"
        onClick={() => setMinimize((minimize) => !minimize)}
      ></button>
      {minimize && (
        <div className="container">
          <div className="state">
            <div className={`${count >= 1 ? "active" : ""}`}> 1 </div>
            <div className={`${count >= 2 ? "active" : ""}`}> 2 </div>
            <div className={`${count >= 3 ? "active" : ""}`}> 3 </div>
          </div>
          <div className="text">
            {count === 1
              ? messages[0]
              : count === 2
              ? messages[1]
              : count === 3
              ? messages[2]
              : ""}
          </div>
          <div className="btn">
            <button onClick={() => handelpervious()}>previous</button>
            <button onClick={() => handelnext()}>next</button>
          </div>
        </div>
      )}
    </>
  );
}
export default App;
