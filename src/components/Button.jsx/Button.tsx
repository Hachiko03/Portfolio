import React from "react";
import classes from "./Button.module.scss"

const Button: React.FC<{ onClick: () => void; text: string }> = ({
  onClick,
  text,
}) => {
  return <button className={classes.button} onClick={onClick}>{text}</button>;
};

export default Button;
