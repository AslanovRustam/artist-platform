import { useState } from "react";
// Components
import Input from "../Input/Input";
import Button from "../Button/Button";
import CustomSelect from "../CustomSelect/CustomSelect";
import CustomSelectWithCheckbox from "../CustomSelect/CustomSelectWithCheckbox";
// Utils
import { BUDGET, LOCATIONS } from "../../utils/constants";
// Types
import type { ICheckbox } from "../../types/types";
// Images
import Search from "../../assets/icons/search.svg?react";
import Budget from "../../assets/icons/budget.svg?react";
import Location from "../../assets/icons/location.svg?react";
import Decor from "../../assets/icons/decorLeft.svg?react";
// Styles
import styles from "./brief.module.css";

type Props = {};

export default function Brief({}: Props) {
  const initialLocations: ICheckbox[] = LOCATIONS.map((loc) => ({
    name: loc,
    checked: false,
  }));

  const [formData, setFormData] = useState<{
    name: string;
    budget: string;
    location: ICheckbox[];
  }>({
    name: "",
    budget: "",
    location: initialLocations,
  });

  const handleFilterChange = (value: string | ICheckbox[], name: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          You bring the brief <br></br>
          <span className={styles.titleGreen}>We bring the beats</span>
        </h2>
        <p className={styles.subTitle}>
          Whether you're curating a festival stage, launching a product, or
          planning your next epic afterparty{" "}
          <br className={styles.mobileDevider}></br>—{" "}
        </p>
        <span className={styles.subTitleGreen}>
          we've got the talent, tools, and tech to make it seamless.
        </span>
        <form className={styles.form}>
          <Input
            label="Search Artist"
            name="name"
            value={formData.name}
            onChange={handleFilterChange}
            placeholder=""
            icon={<Search className={styles.icon} />}
          />
          <CustomSelect
            label="Budget"
            name="budget"
            value={formData.budget}
            onChange={handleFilterChange}
            options={BUDGET}
            icon={<Budget className={styles.icon} />}
          />
          <CustomSelectWithCheckbox
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleFilterChange}
            options={LOCATIONS}
            icon={<Location className={styles.icon} />}
          />

          <Button text="Search" className="brief" fullWidth />
        </form>
      </div>
      <Decor className={styles.decor} />
    </div>
  );
}
