import React from "react";
import cn from "classnames";
import "./button.scss";

const Button = ({ textButton, theme = "primary" }) => (
  <button className={cn(theme)}>{textButton}</button>
);

export default Button;
