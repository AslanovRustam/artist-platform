import { useState } from "react";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
// Components
import Input from "../Input/Input";
import Button from "../Button/Button";
import CustomSelect from "../CustomSelect/CustomSelect";
import CustomSelectWithCheckbox from "../CustomSelect/CustomSelectWithCheckbox";
import { MaskText } from "../AnimatedText/MaskText";
// Utils
import { BUDGET, LOCATIONS } from "../../utils/constants";
// Types
import type { ICheckbox } from "../../types/types";
// Images
import Search from "../../assets/icons/search.svg?react";
import Budget from "../../assets/icons/budget.svg?react";
import Location from "../../assets/icons/location.svg?react";
// import Decor from "../../assets/icons/decorLeft.svg?react";
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

  const { ref: svgRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
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
        <MaskText stagger={1}>
          <p className={styles.title}>
            You bring the brief <br></br>
            <span className={styles.titleGreen}>We bring the beats</span>
          </p>
        </MaskText>
        <MaskText stagger={2}>
          <div className={styles.alighItems}>
            <p className={styles.subTitle}>
              Whether you're curating a festival stage, launching a product, or
              planning your next epic afterparty{" "}
              <br className={styles.mobileDevider}></br>—{" "}
            </p>
            <span className={styles.subTitleGreen}>
              we've got the talent, tools, and tech to make it seamless.
            </span>
          </div>
        </MaskText>

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
      {/* <div className={styles.triangleAnimation}> */}
      <svg
        viewBox="0 0 295 192"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={clsx(styles.decor, inView && styles.animate)}
        ref={svgRef}
      >
        <path
          className={clsx(styles.triangle, styles.triangle1)}
          d="M98.1759 95.0478L6.9062e-06 3.4809e-05L7.62939e-06 191.085L98.1759 95.0478Z"
          fill="currentColor"
        />
        <path
          className={clsx(styles.triangle, styles.triangle2)}
          d="M196.223 95.0478L98.0469 3.4809e-05L98.0469 191.085L196.223 95.0478Z"
          fill="currentColor"
        />
        <path
          className={clsx(styles.triangle, styles.triangle3)}
          d="M294.223 95.0478L196.047 3.4809e-05L196.047 191.085L294.223 95.0478Z"
          fill="currentColor"
        />
      </svg>
      {/* </div> */}
      {/* <Decor className={styles.decor} /> */}
    </div>
  );
}
