import { NavLink } from "react-router";
//Componets
import Menu from "../Menu/Menu";
import Navpanel from "../NavPanels/Navpanel";
import AnimatedLogo from "../AnimatedLogo/AnimatedLogo";
//Utils
import { ROUTES } from "../../utils/constants";
//Styles
import styles from "./header.module.css";

type Props = {};

function Header({}: Props) {
  return (
    <header className={styles.container}>
      <NavLink to={ROUTES.home} className={styles.logoContainer}>
        <AnimatedLogo />
      </NavLink>
      <div className={styles.navPanel}>
        <Navpanel />
      </div>
      <Menu />
    </header>
  );
}

export default Header;
