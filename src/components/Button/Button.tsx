import type { ReactNode } from "react";
import clsx from "clsx";
import styles from "./button.module.css";

type Props = {
  text: string;
  padding?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  children?: ReactNode;
  fullWidth?: boolean;
  fullWidthAll?: boolean;
  onlyMobile?: boolean;
};

function Button({
  text,
  padding,
  onClick,
  type = "button",
  className,
  children,
  fullWidth,
  fullWidthAll,
  onlyMobile,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{ padding: padding }}
      className={clsx(
        styles.button,
        className && styles[className],
        fullWidth && styles.fullWidth,
        fullWidthAll && styles.fullWidthAll,
        onlyMobile && styles.onlyMobile
      )}
    >
      <span>{text}</span>
      {children}
    </button>
  );
}

export default Button;
