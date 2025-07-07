import { NavLink } from "react-router";
import { ROUTES } from "../../utils/constants";
import styles from "./artistslist.module.css";
import { MaskText } from "../AnimatedText/MaskText";
import { useEffect, useState } from "react";
import Button from "../Button/Button";

type Props = {
  artistList: {
    id: number;
    photo: string;
    name: string;
    genre: string;
    variants: string[];
  }[];
};

function ArtistsList({ artistList }: Props) {
  const [showAll, setShowAll] = useState(false);

  const toggleShowMoreBtn = () => {
    setShowAll(!showAll);
  };

  const visibleArtists = showAll ? artistList : artistList.slice(0, 6);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024;
    if (isDesktop) {
      setShowAll(true);
    }
  }, []);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {visibleArtists.map((artist, index) => (
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
      {!showAll && artistList.length > 6 && (
        <Button
          text="Show more"
          className="artistsShow"
          onClick={toggleShowMoreBtn}
        />
      )}
    </div>
  );
}

export default ArtistsList;
