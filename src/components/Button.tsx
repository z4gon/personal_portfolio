import type { HTMLAttributes } from "preact";
import styles from "./Button.module.scss";
import classNames from "../utils/classNames";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button = ({ className, onClick, children, ...rest }: ButtonProps) => {
  return (
    <button
      className={classNames(styles.button, className)}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
