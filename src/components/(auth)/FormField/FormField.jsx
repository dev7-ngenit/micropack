import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

const FormField = ({
  label,
  type,
  id,
  placeholder,
  value,
  onChange,
  error,
  required = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === "password";

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="mb-1 block text-sm font-medium text-gray-700"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative pr-10">
        <input
          type={isPasswordField && showPassword ? "text" : type}
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={cn(
            "focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border px-4 py-3 transition-colors duration-200",
            error ? "border-red-500" : "border-gray-300",
          )}
          required={required}
        />

        {isPasswordField && (
          <button
            type="button"
            className="absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-500 hover:text-gray-700"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      {error ? <p className="mt-1 text-sm text-red-500">{error}</p> : null}
    </div>
  );
};

export default FormField;
