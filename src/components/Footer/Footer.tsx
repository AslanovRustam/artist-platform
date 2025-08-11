import { NavLink, useLocation, useNavigate } from "react-router";
// Components
import BouncingBallFooter from "../BouncingBall/BouncingBallFooter";
import TriangleAnimation from "../TriangleAnimation/TriangleAnimation";
import CustomModal from "../CustomModal/CustomModal";
import PopupContacts from "../Popups/PopupContacts";
//Images
import AnimatedLogo from "../AnimatedLogo/AnimatedLogo";
//Utils
import { ANCHORS, ROUTES } from "../../utils/constants";
//Styles
import styles from "./footer.module.css";
import { useState } from "react";

function Footer() {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
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

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
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
            <button onClick={togglePopup}>Contact</button>
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

      <CustomModal open={isPopupOpen} onClose={togglePopup}>
        <PopupContacts onClose={togglePopup} />
      </CustomModal>
    </footer>
  );
}

export default Footer;
