import { ReactNode } from "react";
import "./Button.modules.css";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  color?: string;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="buttonGroup" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
