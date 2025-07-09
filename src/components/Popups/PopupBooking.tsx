import { useState, type FormEvent } from "react";
// Components
import CustomSelect from "../CustomSelect/CustomSelect";
// import CustomSelectWithCheckbox from "../CustomSelect/CustomSelectWithCheckbox";
import Input from "../Input/Input";
import DatePicker from "../DatePicker/DatePicker";
import Button from "../Button/Button";
// Utils
import type { ICheckbox } from "../../types/types";
import { BUDGET, LOCATIONS } from "../../utils/constants";
// Images
import Location from "../../assets/icons/location.svg?react";
import Calendar from "../../assets/icons/calendar.svg?react";
import Attendents from "../../assets/icons/attendents.svg?react";
import Clock from "../../assets/icons/clock.svg?react";
import Budget from "../../assets/icons/budget.svg?react";
// Styles
import styles from "./popups.module.css";

type Props = { onClose: () => void };

function PopupBooking({ onClose }: Props) {
  // const initialLocations: ICheckbox[] = LOCATIONS.map((loc) => ({
  //   name: loc,
  //   checked: false,
  // }));
  const [formData, setFormData] = useState<{
    type: string;
    date: string;
    attendees: number | "";
    duration: string;
    budget: string;
    location: /*ICheckbox[]*/ string;
    information: string;
  }>({
    type: "",
    date: "",
    attendees: "",
    duration: "",
    budget: "",
    // location: initialLocations,
    location: "",
    information: "",
  });

  const handleFilterChange = (value: string | ICheckbox[], name: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("formData", formData);
    onClose();
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>Book Cairokee</p>
      <p className={styles.subTitle}>
        Fill out the form below to request a booking.
      </p>
      {/* <Close className={styles.closeIcon} onClick={onClose} /> */}
      <form className={styles.form} onSubmit={handleSubmit}>
        <CustomSelect
          label="Event Type"
          name="type"
          onChange={handleFilterChange}
          options={LOCATIONS}
          value={formData.type}
          classNameLabel={styles.labelBooking}
          classNameSelect={styles.selectBooking}
          placeholder="Select event type"
          className={styles.containerWidth}
          classNameOption={styles.option}
        />
        <DatePicker
          label="Event Date"
          name="date"
          onChange={handleFilterChange}
          value={formData.date}
          classNameLabel={styles.labelBooking}
          classNameSelect={styles.selectBooking}
          placeholder="Select date"
          icon={<Calendar className={styles.icon} />}
          className={styles.containerWidth}
        />
        <Input
          label="Number of Attendees"
          name="attendees"
          onChange={handleFilterChange}
          value={formData.attendees}
          classNameLabel={styles.labelBooking}
          classNameInput={styles.selectBooking}
          icon={<Attendents className={styles.icon} />}
          placeholder="Estimated guests"
          className={styles.containerWidth}
        />
        <CustomSelect
          label="Performance Duration"
          name="duration"
          onChange={handleFilterChange}
          options={BUDGET}
          value={formData.duration}
          classNameLabel={styles.labelBooking}
          classNameSelect={styles.selectBooking}
          placeholder="Select duration"
          icon={<Clock className={styles.icon} />}
          className={styles.containerWidth}
          classNameOption={styles.option}
        />
        {/* <CustomSelectWithCheckbox
          label="Event Location"
          name="location"
          value={formData.location}
          onChange={handleFilterChange}
          options={LOCATIONS}
          icon={<Location className={styles.icon} />}
          placeholder="Select location"
          classNameLabel={styles.labelBooking}
          classNameSelect={styles.selectBooking}
          className={styles.containerWidth}
        /> */}
        <CustomSelect
          label="Location"
          name="location"
          onChange={handleFilterChange}
          options={LOCATIONS}
          value={formData.location}
          classNameLabel={styles.labelBooking}
          classNameSelect={styles.selectBooking}
          placeholder="Select location"
          className={styles.containerWidth}
          classNameOption={styles.option}
          icon={<Location className={styles.icon} />}
        />
        {/* <CustomSelect
          label="Budget"
          name="budget"
          value={formData.budget}
          onChange={handleFilterChange}
          options={BUDGET}
          icon={<Budget className={styles.icon} />}
          classNameLabel={styles.labelBooking}
          classNameSelect={styles.selectBooking}
          className={styles.containerWidth}
          classNameOption={styles.option}
        /> */}
        {/* <div className={styles.contanerForIcon}> */}
        <Input
          label="Your Budget (USD)"
          name="budget"
          onChange={handleFilterChange}
          value={formData.budget}
          icon={<Budget className={styles.icon} />}
          classNameLabel={styles.labelBooking}
          classNameInput={styles.selectBooking}
          placeholder="Estimated guests"
          className={styles.containerWidth}
          infoBtn
        />
        {/* <Info className={styles.infoIcon} />
        </div> */}
        <Input
          label="Additional Information"
          name="information"
          onChange={handleFilterChange}
          value={formData.information}
          classNameLabel={styles.labelBooking}
          classNameInput={styles.selectBookingTextArea}
          placeholder="Any special requests or details about your event"
          className={styles.containerWidthTextArea}
          type="textarea"
        />

        <Button text="Book now" className="bookNow" type="submit" />
      </form>
    </div>
  );
}

export default PopupBooking;
