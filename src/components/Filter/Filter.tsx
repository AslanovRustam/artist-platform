import styles from "./filter.module.css";
import FilterIcon from "../../assets/icons/filter.svg?react";
import { useEffect, useRef, useState } from "react";
import CustomSelectWithCheckbox from "../CustomSelect/CustomSelectWithCheckbox";
import type { ICheckbox } from "../../types/types";
// import Budget from "../../assets/icons/budget.svg?react";
import Location from "../../assets/icons/location.svg?react";

type Props = {
  formData: {
    location: ICheckbox[];
    budget: { from: string; to: string };
    genre: ICheckbox[];
  };
  handleFilterChange: (value: string | ICheckbox[], name: string) => void;
  optionsLocation: string[];
  optionsGenre: string[];
};

function Filter({
  formData,
  handleFilterChange,
  optionsLocation,
}: // optionsGenre,
Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const togglePopup = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;
    if (
      popupRef.current &&
      !popupRef.current.contains(target) &&
      wrapperRef.current &&
      !wrapperRef.current.contains(target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper} ref={wrapperRef} onClick={togglePopup}>
        <FilterIcon className={styles.icon} />
      </div>
      {isOpen && (
        <div ref={popupRef} className={styles.dropDownContainer}>
          <CustomSelectWithCheckbox
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleFilterChange}
            options={optionsLocation}
            icon={<Location className={styles.icon} />}
          />
        </div>
      )}
    </div>
  );
}

export default Filter;
