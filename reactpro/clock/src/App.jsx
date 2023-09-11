import React from "react";
import {createRoot} from "react-dom/client";

function App(){

  const init=new Date().toLocaleTimeString();
  const [time,setTime]=React.useState(init);

 function updateClock(){
    
  const updatedTime=new Date().toLocaleTimeString();
  setTime(updatedTime);
 }

 setInterval(updateClock,1000);
  return(
    <div className="container">
      <div className="incrementbox">
        <h1>Current Time</h1>
        <h2>
          {time}
          <span>Secs</span>
        </h2>
        <button onClick={updateClock}>Update</button>
      </div>
    </div>
  );
}


export default App;