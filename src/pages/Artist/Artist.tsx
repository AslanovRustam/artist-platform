import { useEffect, useState } from "react";
// Components
import ArtistSearch from "../../components/ArtistSearch/ArtistSearch";
import ArtistTitle from "../../components/ArtistTitle/ArtistTitle";
import ArtistsList from "../../components/ArtistsList/ArtistsList";
import SoundWaves from "../../components/SoundWaves/SoundWaves";
import Looking from "../../components/Looking/Looking";
// Utils
import type { ICheckbox } from "../../types/types";
import { ARTISTS_LIST, GENRE, LOCATIONS } from "../../utils/constants";
// Styles
import styles from "./artist.module.css";

const initialLocations: ICheckbox[] = LOCATIONS.map((loc) => ({
  name: loc,
  checked: false,
}));

const initialGenre: ICheckbox[] = GENRE.map((genre) => ({
  name: genre,
  checked: false,
}));

export default function Artist() {
  const [searchArtist, setSearchArtist] = useState<string>("");
  const [filteredArtist, setfFilteredAArtist] = useState<
    {
      id: number;
      photo: string;
      name: string;
      genre: string;
      variants: string[];
    }[]
  >(ARTISTS_LIST);
  const [formData, setFormData] = useState<{
    location: ICheckbox[];
    budget: { from: string; to: string };
    genre: ICheckbox[];
  }>({
    location: initialLocations,
    budget: { from: "1000", to: "5000" },
    genre: initialGenre,
  });

  const handleArtistSearchByName = (value: string): void => {
    setSearchArtist(value);
  };

  const handleFilterChange = (value: ICheckbox[] | string, name: string) => {
    setFormData((prev) => {
      if (name === "genre" || name === "location") {
        return { ...prev, [name]: value as ICheckbox[] };
      }
      if (name === "budget.from" || name === "budget.to") {
        const key = name.split(".")[1] as "from" | "to";
        return {
          ...prev,
          budget: {
            ...prev.budget,
            [key]: value as string,
          },
        };
      }
      return prev;
    });
  };

  const handleClearData = () => {
    setFormData({
      location: initialLocations,
      budget: { from: "", to: "" },
      genre: initialGenre,
    });
  };
  const handleSubmit = () => {
    console.log("Form submitted with data:", formData);
  };

  useEffect(() => {
    const filtered = ARTISTS_LIST.filter((artist) =>
      artist.name.toLowerCase().includes(searchArtist.toLowerCase())
    );

    setfFilteredAArtist(filtered);
  }, [searchArtist]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className={styles.section}>
      <ArtistTitle />
      <ArtistSearch
        search={handleArtistSearchByName}
        value={searchArtist}
        formData={formData}
        handleFilterChange={handleFilterChange}
        optionsLocation={LOCATIONS}
        optionsGenre={GENRE}
        clear={handleClearData}
        submit={handleSubmit}
      />
      <ArtistsList artistList={filteredArtist} />
      <SoundWaves />
      <Looking />
    </section>
  );
}
