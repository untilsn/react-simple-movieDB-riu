import React from "react";

const ButtonMovie = ({
  children,
  className,
  type = "button",
  onClick,
  bgColor = "primary",
}) => {
  let bgClassName = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary";
      break;
    case "secondary":
      bgClassName = "bg-secondary";
      break;
    default:
      break;
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full p-3 text-base font-bold rounded-lg ${bgClassName} ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonMovie;
