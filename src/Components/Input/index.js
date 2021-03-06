import React from "react";

const Input = ({
  className,
  placeholder,
  name,
  value,
  type,
  onChange,
  suffix = " ",
  disabled
}) => (
  <input
    value={value}
    className={className}
    name={name}
    autoComplete="off"
    placeholder={`${suffix} ${placeholder}`}
    type={type}
    onChange={onChange}
    disabled={disabled}
  />
);

export default Input;
