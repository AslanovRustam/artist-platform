import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import styles from "./triangleanimation.module.css";

export default function TriangleAnimation() {
  const { ref: triangleRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <svg
      viewBox="0 0 295 192"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(styles.triangleFirst, inView && styles.animate)}
      ref={triangleRef}
    >
      <path
        className={clsx(styles.triangle, styles.triangle1)}
        d="M98.1759 95.0478L6.9062e-06 3.4809e-05L7.62939e-06 191.085L98.1759 95.0478Z"
        fill="currentColor"
      />
      <path
        className={clsx(styles.triangle, styles.triangle2)}
        d="M196.223 95.0478L98.0469 3.4809e-05L98.0469 191.085L196.223 95.0478Z"
        fill="currentColor"
      />
      <path
        className={clsx(styles.triangle, styles.triangle3)}
        d="M294.223 95.0478L196.047 3.4809e-05L196.047 191.085L294.223 95.0478Z"
        fill="currentColor"
      />
    </svg>
  );
}
