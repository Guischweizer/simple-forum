import React from "react";
import cn from "classnames";
import "./button.scss";

const Button = ({ textButton, theme = "primary", onClick }) => (
  <button className={cn(theme)} onClick={onClick}>
    {textButton}
  </button>
);

export default Button;
