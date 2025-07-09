import clsx from "clsx";
import {
  DIRECTION_TO_LANGUAGE,
  LANGUAGE_TO_DIRECTION,
  LANGUEGES,
  type LanguageKey,
} from "../../utils/constants";
import { useDirection } from "../../context/DirectionContext";
import styles from "./langSwitcher.module.css";
import { useEffect } from "react";

type Props = {};

export default function LangSwitcher({}: Props) {
  const { direction, setDirection } = useDirection();

  const currentLang = DIRECTION_TO_LANGUAGE[direction];

  const handleChange = (langKey: LanguageKey) => {
    setDirection(LANGUAGE_TO_DIRECTION[langKey]);
    document.documentElement.style.setProperty("--dir", direction);
  };
  console.log(direction);

  useEffect(() => {
    document.documentElement.style.setProperty("--dir", direction);
  }, [direction]);

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={clsx(styles.button, currentLang === "en" && styles.active)}
        onClick={() => handleChange("en")}
      >
        {LANGUEGES.en}
      </button>
      <div className={styles.devider} />
      <button
        type="button"
        className={clsx(
          styles.button,
          currentLang === "arabic" && styles.active
        )}
        onClick={() => handleChange("arabic")}
      >
        {LANGUEGES.arabic}
      </button>
    </div>
  );
}
