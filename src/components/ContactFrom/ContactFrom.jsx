import React from "react";
import styles from "./ContactFrom.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { HiMail } from "react-icons/hi";

const ContactFrom = () => {
  return (
    <div className={`container ${styles.ContactFrom}`}>
      <div className={styles.contact_from}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icons={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icons={<FiPhone fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL"
          icons={<HiMail fontSize="24px" />}
        />

        <form action="">
          <div className={styles.form_controler}>
            <label htmlFor="name">Name</label>
            <input type="name" name="name" />
          </div>
          <div className={styles.form_controler}>
            <label htmlFor="email">E-Mail</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_controler}>
            <label htmlFor="TEXT">TEXT</label>
            <textarea name="text" rows="8"></textarea>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT" />
          </div>
        </form>
      </div>

      <div className={styles.contact_img}>
        <img src="images/Service 24_7-pana 1.svg" alt="" />
      </div>
    </div>
  );
};

export default ContactFrom;
