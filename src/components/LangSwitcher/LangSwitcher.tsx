import { useState } from "react";
import clsx from "clsx";
import { LANGUEGES } from "../../utils/constants";
import styles from "./LangSwitcher.module.css";

type Props = {};

export default function LangSwitcher({}: Props) {
  const [currentLanguage, setCurrentLanguage] = useState<string>(LANGUEGES.en);

  const handleLanguageChange = (variant: string) => {
    setCurrentLanguage(variant);
  };

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={clsx(
          styles.button,
          currentLanguage === LANGUEGES.en && styles.active
        )}
        onClick={() => handleLanguageChange(LANGUEGES.en)}
      >
        {LANGUEGES.en}
      </button>
      <div className={styles.devider} />
      <button
        type="button"
        className={clsx(
          styles.button,
          currentLanguage === LANGUEGES.arabic && styles.active
        )}
        onClick={() => handleLanguageChange(LANGUEGES.arabic)}
      >
        {LANGUEGES.arabic}
      </button>
    </div>
  );
}
