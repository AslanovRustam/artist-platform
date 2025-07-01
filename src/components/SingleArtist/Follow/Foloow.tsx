import { NavLink } from "react-router";
// Components
import { MaskText } from "../../AnimatedText/MaskText";
import Title from "../Title/Title";
// Images
import Instagram from "../../../assets/icons/socials/Instagram.svg?react";
import Tiktok from "../../../assets/icons/socials/Tiktok.svg?react";
import Facebook from "../../../assets/icons/socials/Facebook.svg?react";
// Styles
import styles from "./follow.module.css";

function Foloow() {
  const socials = [
    { name: "Instagram", link: "@Sahahjognsonmusic", icon: Instagram },
    { name: "Tiktok", link: "@Sahahjognsonmusic", icon: Tiktok },
    { name: "Facebook", link: "@Sahahjognsonmusic", icon: Facebook },
  ];
  return (
    <div className={styles.container}>
      <MaskText>
        <Title>Follow Sahah on social networks</Title>
      </MaskText>
      <ul className={styles.list}>
        {socials.map((item, index) => {
          const Icon = item.icon;
          return (
            <MaskText stagger={index + 1} key={item.name}>
              <li className={styles.item}>
                <NavLink to="#">
                  <Icon className={styles.icon} />
                  <span className={styles.text}>{item.link}</span>
                </NavLink>
              </li>
            </MaskText>
          );
        })}
      </ul>
    </div>
  );
}

export default Foloow;
