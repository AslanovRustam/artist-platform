import { NavLink, useLocation, useNavigate } from "react-router";
// Components
import BouncingBallFooter from "../BouncingBall/BouncingBallFooter";
import TriangleAnimation from "../TriangleAnimation/TriangleAnimation";
//Images
import AnimatedLogo from "../AnimatedLogo/AnimatedLogo";
//Utils
import { ANCHORS, ROUTES } from "../../utils/constants";
//Styles
import styles from "./footer.module.css";

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = (hash: string) => {
    if (location.pathname === "/") {
      console.log("Scrolling to anchor:", hash);

      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      console.log("navigate to anchor:", hash);
      navigate(`/${hash}`);
    }
  };
  return (
    <footer className={styles.footer}>
      <NavLink to={ROUTES.home} className={styles.logoContainer}>
        <AnimatedLogo />
      </NavLink>
      <BouncingBallFooter />
      <nav className={styles.navPanel}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button onClick={() => handleAnchorClick(ANCHORS.artists.anchor)}>
              Artists
            </button>
          </li>
          <li className={styles.item}>
            <button
              onClick={() => handleAnchorClick(ANCHORS.howItWorks.anchor)}
            >
              How it works
            </button>
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
