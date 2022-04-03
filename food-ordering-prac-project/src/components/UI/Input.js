import classes from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  //So if the input project passed in has other fields like {type: 'text'}, then the {type: 'text} will be added as well
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
