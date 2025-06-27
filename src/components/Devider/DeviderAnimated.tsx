import clsx from "clsx";
import Marquee from "react-fast-marquee";
// Images
import AMPLogo from "../../assets/icons/devider/AMPLogo.svg?react";
import Purple from "../../assets/icons/devider/purpleElement.svg?react";
// import Equalizer from "../Equalizer/Equalizer";
import AnimatedPurple from "../../assets/icons/devider/download.svg?react";
// Styles
import styles from "./devider.module.css";

type Props = {
  direction?: "left" | "right" | "up" | "down";
  speed?: number;
  className: "green" | "transparent" | "logo";
  pauseOnHover?: boolean;
};

export default function DeviderAnimated({
  direction = "left",
  speed = 50,
  className,
  pauseOnHover = false,
}: Props) {
  return (
    <Marquee
      pauseOnHover={pauseOnHover}
      direction={direction}
      speed={speed}
      className={`${className && styles[className]}`}
    >
      <ul
        className={clsx(
          styles.list,
          className === "green" && styles.green,
          className === "transparent" && styles.transparent,
          className === "logo" && styles.logoList
        )}
      >
        {Array.from({ length: 36 }).map((_, i) => (
          <li key={i} className={styles.item}>
            {className === "logo" && <AMPLogo className={styles.iconLogo} />}
            {className === "transparent" && (
              // <Purple className={styles.iconFull} />
              <AnimatedPurple className={styles.iconFull} />
              // <Equalizer />
            )}
            {className === "green" && (
              <Purple className={styles.icon} />

              // <AnimatedPurple className={styles.icon} />
              //   <Equalizer />
            )}
          </li>
        ))}
      </ul>
    </Marquee>
  );
}
