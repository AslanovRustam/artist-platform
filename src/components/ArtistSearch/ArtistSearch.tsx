import type { ICheckbox } from "../../types/types";
import Filter from "../Filter/Filter";
import Input from "../Input/Input";
import styles from "./artistsearch.module.css";
import Search from "../../assets/icons/search.svg?react";

type Props = {
  search: (value: string) => void;
  value: string;
  formData: {
    location: ICheckbox[];
    budget: { from: string; to: string };
    genre: ICheckbox[];
  };
  handleFilterChange: (value: string | ICheckbox[], name: string) => void;
  optionsLocation: string[];
  optionsGenre: string[];
};

function ArtistSearch({
  search,
  value,
  formData,
  handleFilterChange,
  optionsLocation,
  optionsGenre,
}: Props) {
  return (
    <div className={styles.container}>
      <Input
        label="Search Artist"
        name="search"
        onChange={search}
        value={value}
        classNameInput={styles.fullWidthInput}
        className={styles.fullWidth}
        icon={<Search className={styles.icon} />}
      />
      <Filter
        formData={formData}
        handleFilterChange={handleFilterChange}
        optionsLocation={optionsLocation}
        optionsGenre={optionsGenre}
      />
    </div>
  );
}

export default ArtistSearch;
