import LogoAMP from "../../assets/icons/devider/AMPLogo.svg?react";
import styles from "./animatedlogo.module.css";

export default function AnimatedLogo() {
  return (
    <div className={styles.animatedLogoContainer}>
      <div className={styles.wrapper}>
        <svg viewBox="0 0 53 45" xmlns="http://www.w3.org/2000/svg">
          <style>
            {`
          .bar {
            animation: pulse 1s ease-in-out infinite;
            transform-origin: center bottom;
          }
          .bar:nth-child(1) { animation-delay: 0s; animation-duration: 1.4s; }
          .bar:nth-child(2) { animation-delay: 0.2s; animation-duration: 1.1s; }
          .bar:nth-child(3) { animation-delay: 0.4s; animation-duration: 1.8s; }
          .bar:nth-child(4) { animation-delay: 0.1s; animation-duration: 1.3s; }

          @keyframes pulse {
            0%, 100% { transform: scaleY(1); }
            50% { transform: scaleY(0.3); }
          }
        `}
          </style>

          <rect
            className="bar"
            x="0.9375"
            y="23.625"
            width="7.3125"
            height="7.3125"
            fill="currentColor"
          />
          <rect
            className="bar"
            x="30.1875"
            y="14.0625"
            width="7.3125"
            height="16.875"
            fill="currentColor"
          />
          <rect
            className="bar"
            x="15.5625"
            y="0"
            width="7.3125"
            height="44.4375"
            fill="currentColor"
          />
          <rect
            className="bar"
            x="44.8125"
            y="0"
            width="7.3125"
            height="30.9375"
            fill="currentColor"
          />
        </svg>
      </div>
      <LogoAMP className={styles.logoText} />
    </div>
  );
}
