import { NavLink } from "react-router";
//Images
import AnimatedLogo from "../AnimatedLogo/AnimatedLogo";
//Utils
import { ANCHORS, ROUTES } from "../../utils/constants";
//Styles
import styles from "./footer.module.css";
import BouncingBallFooter from "../BouncingBall/BouncingBallFooter";
import TriangleAnimation from "../TriangleAnimation/TriangleAnimation";

function Footer() {
  return (
    <footer className={styles.footer}>
      <NavLink to={ROUTES.home} className={styles.logoContainer}>
        <AnimatedLogo />
      </NavLink>
      <BouncingBallFooter />
      <nav className={styles.navPanel}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a href={ANCHORS.artists.anchor}>Artists</a>
          </li>
          <li className={styles.item}>
            <a href={ANCHORS.howItWorks.anchor}>How it works</a>
          </li>
          <li className={styles.item}>
            <a href={ANCHORS.howItWorks.anchor}>Contact</a>
          </li>
        </ul>
      </nav>
      <ul className={styles.links}>
        <li className={styles.item}>
          <NavLink to="#">Terms</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="#">Privacy</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="#">Cookies</NavLink>
        </li>
      </ul>
      <div className={styles.triangle}>
        <TriangleAnimation />
      </div>
    </footer>
  );
}

export default Footer;
