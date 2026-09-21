import styles from "./Tag.module.scss";
import { classNames } from "../utils/classNames";

interface TagProps {
  children?: preact.ComponentChildren;
  className?: string;
  secondary?: boolean;
  dark?: boolean;
}

export const Tag = ({
  children,
  className,
  secondary = false,
  dark = false,
}: TagProps) => (
  <span
    className={classNames(styles.tag, className, {
      [styles.dark]: dark,
      [styles.secondary]: secondary,
    })}
  >
    {children}
  </span>
);
