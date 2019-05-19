import React from "react";

const Input = ({
  className,
  placeholder,
  name,
  value,
  type,
  onChange,
  disabled
}) => (
  <input
    value={value}
    className={className}
    name={name}
    autoComplete="off"
    placeholder={placeholder}
    type={type}
    onChange={onChange}
    disabled={disabled}
  />
);

export default Input;
