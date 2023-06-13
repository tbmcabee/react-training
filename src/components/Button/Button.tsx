import { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  color?: string;
}

const Button = ({ children, onClick, color = "primary" }: ButtonProps) => {
  return (
    <button className={[styles.btn, styles['btn-' + color]].join(' ')} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
