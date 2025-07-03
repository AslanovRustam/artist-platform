import { NavLink } from "react-router";
import { ARTISTS_LIST, ROUTES } from "../../utils/constants";
import styles from "./artistslist.module.css";
import { MaskText } from "../AnimatedText/MaskText";

type Props = {};

function ArtistsList({}: Props) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {ARTISTS_LIST.map((artist, index) => (
          <MaskText
            stagger={index * 0.2}
            className={styles.itemMask}
            key={`${artist.name}-${index}`}
          >
            <NavLink to={`${ROUTES.artists}/${artist.name}`}>
              <li
                className={styles.item}
                style={{
                  backgroundImage: `
                      linear-gradient(
                        180deg,
                        rgba(0, 0, 0, 0) 0%,
                        rgba(0, 0, 0, 0.35) 50%,
                        rgba(0, 0, 0, 0.5) 100%
                      ),
                      url(${artist.photo})
                    `,
                }}
              >
                <p className={styles.verified}>Verified</p>

                <div className={styles.wrapper}>
                  <p className={styles.name}>{artist.name}</p>
                  <p className={styles.genre}>{artist.genre}</p>
                  <div className={styles.variants}>
                    {artist.variants.slice(0, 2).map((item, index) => (
                      <p
                        key={`${item}-${index}`}
                        className={styles.singleVariant}
                      >
                        {item}
                      </p>
                    ))}
                    {artist.variants.length > 2 && (
                      <p className={styles.singleVariant}>
                        +{artist.variants.length - 2}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            </NavLink>
          </MaskText>
        ))}
      </ul>
    </div>
  );
}

export default ArtistsList;
