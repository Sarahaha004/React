import React from "react";
import LoginScreen from "./components/LoginScreen";
//import 'src/components/App.css';

var LoginState=false;

function LoginConditionalRender(){
  if(LoginState===true)
  {
    return <h1>You are already logged in</h1>;
  }
  else{
    return <LoginScreen/>;
  }
}

function App(){
  return <div className="container">
    {LoginConditionalRender()}
  </div>;
}

export default App;
