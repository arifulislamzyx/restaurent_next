import { IAButton } from "@/types/button";
import React from "react";

const Button: React.FC<IAButton> = ({
  children,
  type = "button",
  onClick,
  disabled = false,
  className = "",
  name,
  value,
}) => {
  return (
    <button
      value={value}
      name={name}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
