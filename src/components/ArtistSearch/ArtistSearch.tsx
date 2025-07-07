import Filter from "../Filter/Filter";
import Input from "../Input/Input";
// Utils
import type { ICheckbox } from "../../types/types";
// Images
import Search from "../../assets/icons/search.svg?react";
// Styles
import styles from "./artistsearch.module.css";

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
  clear: () => void;
  submit: () => void;
};

function ArtistSearch({
  search,
  value,
  formData,
  handleFilterChange,
  optionsLocation,
  optionsGenre,
  clear,
  submit,
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
        clear={clear}
        submit={submit}
      />
    </div>
  );
}

export default ArtistSearch;
