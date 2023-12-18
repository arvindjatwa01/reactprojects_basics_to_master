import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);
  // let counter = 15;

  const increaseCounterValue = () => {
    // console.log(counter);
    // counter = counter + 1;
    if(counter <20){
      setCounter(counter + 1);
    }
  };

  const decreraseValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Vite + React: Counter</h1>
      <h2>Counter Value: {counter}</h2>
      <button style={{ marginRight: "10px" }} onClick={increaseCounterValue}>
        Add Value {counter}
      </button>
      <button onClick={decreraseValue}>Decrease Value {counter}</button>
      <p>Footer : {counter}</p>
    </>
  );
}

export default App;
