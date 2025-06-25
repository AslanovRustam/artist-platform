import type { ChangeEvent, ReactNode } from "react";
import clsx from "clsx";
import styles from "./input.module.css";

type Props = {
  label: string;
  name: string;
  value: string | number;
  onChange: (value: string, name: string) => void;
  placeholder?: string;
  type?: "text" | "number" | "textarea";
  icon?: ReactNode;
  className?: string;
  classNameLabel?: string;
  classNameInput?: string;
  rows?: number;
};

export default function Input({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  icon,
  className,
  classNameLabel,
  classNameInput,
  rows = 2,
}: Props) {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    onChange(value, name);
  };

  return (
    <div className={clsx(styles.wrapper, className)}>
      <label htmlFor={name} className={clsx(styles.label, classNameLabel)}>
        {label}
      </label>

      <div className={styles.inputContainer}>
        {icon && <div className={styles.icon}>{icon}</div>}

        {type === "textarea" ? (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className={clsx(styles.input, classNameInput)}
            rows={rows}
          />
        ) : (
          <input
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className={clsx(styles.input, classNameInput)}
            type={type}
          />
        )}
      </div>
    </div>
  );
}
