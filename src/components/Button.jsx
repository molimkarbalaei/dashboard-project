import React from "react";

// we pass all the props we accept in ecommerce.jsx
const Button = ({ bgColor, color, borderRadius, text, size }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
};

export default Button;
