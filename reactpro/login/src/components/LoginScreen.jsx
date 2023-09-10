import React from "react";
import LoginInput from "./LoginInput";

function LoginScreen(){
    return (
        <div className="loginbox">
            <h1>Login Form</h1>
            <form className="form">
    
        <LoginInput
          label="Username"
          labelfor="pass"
          inputid="uname"
          inputname="uname"
          inputtype="text"
          inputplaceholder="Enter your username"
        />
    
        <LoginInput
          label="Password"
          labelfor="pass"
          inputid="pass"
          inputname="pass"
          inputtype="password"
          inputplaceholder="Enter your password"
        />
        <button type="submit">Login</button>
      </form>
        </div>
    );
}

export default LoginScreen;