import React from "react";

function Loginscreen(props){
    return (
        <div className="field">
        <label for={props.labelfor}>{props.label}:</label>
        <input
          id={props.inputid}
          name={props.inputname}
          type={props.inputtype}
          placeholder={props.inputplaceholder}
        />
      </div>
    );
}

export default Loginscreen;