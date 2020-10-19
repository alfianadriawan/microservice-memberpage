import React from "react";
import propTypes from "prop-types";

export default function Input({
  error,
  name,
  type,
  onChange,
  placeholder,
  value,
  labelName,
  inputClassName,
}) {
  return (
    <div className="flex flex-col mb-4">
      {labelName && (
        <label
          htmlFor={name}
          className={[
            "text-lg mb-2",
            error ? "text-red-500" : "text-gray-900",
          ].join(" ")}
        >
          {labelName}
        </label>
      )}

      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={[
          "bg-white focus:outline-none px-6 py-3 border w-full ",
          error
            ? "text-red-500 border-red-500"
            : "text-gray-800  border-gray-600 focus:border-teal-500",
          inputClassName,
        ].join(" ")}
        placeholder={placeholder}
      />
      <span className="text-red-500 pt-2">{error}</span>
    </div>
  );
}

Input.propTypes = {
  error: propTypes.string,
  name: propTypes.string.isRequired,
  type: propTypes.oneOf(["text", "email", "password"]),
  onChange: propTypes.func.isRequired,
  placeholder: propTypes.string,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  labelName: propTypes.string,
  inputClassName: propTypes.string,
};
