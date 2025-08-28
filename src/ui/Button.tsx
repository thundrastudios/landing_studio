import React, { JSX } from "react";
import style from "@/style/button.module.css";

interface ButtonProps {
  name: string;
  isDisable?: "disable" | "active";
  size: "small" | "medium" | "large";
  onClick?: () => void;
}

function Button({ name, isDisable, size, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${style.styledbutton}  ${style[size]} ${
        isDisable === "active" ? style.active : style.disable
      }`}
    >
      {name}
    </button>
  );
}

export default Button;
