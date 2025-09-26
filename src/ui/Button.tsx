import React from "react";

interface ButtonProps {
  name: string;
  isDisable?: "disable" | "active";
  size: "small" | "medium" | "large";
  onClick?: () => void;
}

function Button({ name, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={``}>
      {name}
    </button>
  );
}

export default Button;
