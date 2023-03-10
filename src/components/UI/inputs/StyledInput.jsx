import React from "react";
import classes from "./StyledInput.module.css";

const StyledInput = React.forwardRef((props, ref) => {
  return (
    <input ref={ref} {...props} className={classes.styledInp} type="text" />
  );
});

export default StyledInput;
