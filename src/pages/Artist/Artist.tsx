import { useState } from "react";
import ArtistSearch from "../../components/ArtistSearch/ArtistSearch";
import ArtistTitle from "../../components/ArtistTitle/ArtistTitle";
import styles from "./artist.module.css";
import type { ICheckbox } from "../../types/types";
import { GENRE, LOCATIONS } from "../../utils/constants";
import ArtistsList from "../../components/ArtistsList/ArtistsList";

type Props = {};

const initialLocations: ICheckbox[] = LOCATIONS.map((loc) => ({
  name: loc,
  checked: false,
}));

const initialGenre: ICheckbox[] = GENRE.map((genre) => ({
  name: genre,
  checked: false,
}));

export default function Artist({}: Props) {
  const [searchArtist, setSearchArtist] = useState<string>("");
  const [formData, setFormData] = useState<{
    location: ICheckbox[];
    budget: { from: string; to: string };
    genre: ICheckbox[];
  }>({
    location: initialLocations,
    budget: { from: "", to: "" },
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
      />
      <ArtistsList />
    </section>
  );
}
