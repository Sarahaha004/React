import React from "react";
import { createRoot } from "react-dom/client";

function App(){
  function Increment(){
    incCount(count +1);
  }

  const [count,incCount]=React.useState(0);

  return(
    <div className="container">
      <div className="incrementbox">
        <h1>Counter Value</h1>
        <h2>{count}</h2>
        <button onClick={Increment}>Increment</button>

      </div>
    </div>
  )

}

export default App;
