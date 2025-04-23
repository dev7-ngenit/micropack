import { cn } from "@/lib/utils";
import React from "react";

const Button = ({
  children,
  type = "button",
  disabled = false,
  onClick,
  className,
}) => {
  const disabledStyles = disabled
    ? "opacity-60 cursor-not-allowed"
    : "cursor-pointer";

  return (
    <button
      type={type}
      className={cn(
        disabledStyles,
        "rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition-all duration-200 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none",
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
