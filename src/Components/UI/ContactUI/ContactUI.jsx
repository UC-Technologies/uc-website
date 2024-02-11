import React from "react";
import styles from "./contactUI.module.css";
const ContactUI = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.left}>
        <div className={styles.information1}>Contact Information</div>
        <div className={styles.information2}>
          <div>pho 12345678</div>
          <div>pho juman60000@gmail</div>
          <div>pho NIT Silchar</div>
        </div>
        <div className={styles.information3}>
          <div>pho</div>
          <div>pho</div>
          <div>pho</div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.inputFields}>
          <div>
            <label htmlFor="username">Username</label>
            <br />
            <input type="text" id="username" name="username" />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <br />
            <input type="text" id="username" name="username" />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <br />
            <input type="text" id="username" name="username" />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <br />
            <input type="text" id="username" name="username" />
          </div>
        </div>
        <div>
          <div>Select Subject?</div>
          <div className={styles.radioFields}>
            <div>
              <input type="radio" id="username" name="username" />
              <label htmlFor="username">Username</label>
            </div>
            <div>
              <input type="radio" id="username" name="username" />
              <label htmlFor="username">Username</label>
            </div>
            <div>
              <input type="radio" id="username" name="username" />
              <label htmlFor="username">Username</label>
            </div>
            <div>
              <input type="radio" id="username" name="username" />
              <label htmlFor="username">Username</label>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default ContactUI;
