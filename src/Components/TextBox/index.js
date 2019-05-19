import React from "react";
import cn from "classnames";

import "./text-box.scss";

const TextBox = ({
  className,
  placeholder,
  name,
  value,
  suffix = " ",
  type,
  onChange,
  disabled,
  maxlength,
  columns,
  rows
}) => (
  <textarea
    value={value}
    className={cn(className, "text-box")}
    name={name}
    rows={rows}
    cols={columns}
    maxlength={maxlength}
    autoComplete="off"
    placeholder={`${suffix} ${placeholder}`}
    type={type}
    onChange={onChange}
    disabled={disabled}
  />
);

export default TextBox;
