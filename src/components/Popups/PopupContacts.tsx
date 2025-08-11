import { useState, type FormEvent } from "react";
import styles from "./popups.module.css";
import Input from "../Input/Input";
import CustomSelect from "../CustomSelect/CustomSelect";
import { SUBJECT } from "../../utils/constants";
import Button from "../Button/Button";

type Props = { onClose: () => void };

export default function PopupContacts({ onClose }: Props) {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: number | "";
    subject: string;
    message: string;
  }>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("formData", formData);
    onClose();
  };

  const handleFilterChange = (value: string, name: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //   const handleSetData = (value: string, name: string, index?: number) => {
  //     if (
  //       typeof index === "number" &&
  //       ["name", "role", "location", "nationality"].includes(name)
  //     ) {
  //       const updatedMembers = [...formData.crewMembers];
  //       updatedMembers[index] = {
  //         ...updatedMembers[index],
  //         [name]: value,
  //       };
  //       setFormData((prev) => ({
  //         ...prev,
  //         crewMembers: updatedMembers,
  //       }));
  //     } else {
  //       setFormData((prev) => ({
  //         ...prev,
  //         [name]: value,
  //       }));
  //     }
  //   };
  return (
    <div className={styles.container}>
      <p className={styles.title}>Get in Touch</p>
      <p className={styles.subTitleContact}>
        Have questions about AMP? Want to book an artist or list your venue?
        We'd love to hear from you. Send us a message and we'll respond as soon
        as possible.
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.titleContainer}>
          <p className={styles.titleForm}>Send us a Message</p>
          <p className={styles.subTitleContactForm}>
            Fill out the form below and we'll get back to you soon.
          </p>
        </div>
        <Input
          label="Full name"
          name="name"
          onChange={handleFilterChange}
          value={formData.name}
          classNameLabel={styles.labelBooking}
          classNameInput={styles.inputArtist}
          placeholder="Enter your full name"
          className={styles.containerWidth}
          required
        />
        <Input
          label="Email Address"
          name="email"
          onChange={handleFilterChange}
          value={formData.email}
          classNameLabel={styles.labelBooking}
          classNameInput={styles.inputArtist}
          placeholder="Enter your email"
          className={styles.containerWidth}
          required
        />
        <Input
          label="Phone Number (Optional)"
          name="phone"
          onChange={handleFilterChange}
          value={formData.phone}
          classNameLabel={styles.labelBooking}
          classNameInput={styles.inputArtist}
          placeholder="Enter your phone number"
          className={styles.containerWidth}
        />
        <CustomSelect
          label="Subject"
          name="subject"
          onChange={handleFilterChange}
          options={SUBJECT}
          value={formData.subject}
          classNameLabel={styles.labelBooking}
          classNameSelect={styles.inputArtist}
          placeholder="Select duration"
          className={styles.containerWidth}
          classNameOption={styles.option}
        />
        <Input
          label="Message"
          name="message"
          onChange={handleFilterChange}
          value={formData.message}
          classNameLabel={styles.labelBooking}
          classNameInput={styles.selectBookingTextArea}
          placeholder="Tell us how we can help you..."
          className={styles.containerWidthTextArea}
          type="textarea"
          rows={3}
          required
        />
        <Button text="Send Message" className="bookNow" type="submit" />
      </form>
    </div>
  );
}
