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
            <label htmlFor="username">First Name</label>
            <br />
            <input type="text" id="username" name="username" />
          </div>
          <div>
            <label htmlFor="username">Last Name</label>
            <br />
            <input type="text" id="username" name="username" />
          </div>
          <div>
            <label htmlFor="username">Email</label>
            <br />
            <input type="text" id="username" name="username" />
          </div>
          <div>
            <label htmlFor="username">Phone Number</label>
            <br />
            <input type="text" id="username" name="username" />
          </div>
        </div>
        <div className={styles.subject}>
          <div style={{ fontSize: "1.2rem" }}>Select Subject?</div>
          <div className={styles.radioFields}>
            <div>
              <input type="radio" id="username" name="username" />
              <label htmlFor="username">General Inquiry</label>
            </div>
            <div>
              <input type="radio" id="username" name="username" />
              <label htmlFor="username">General Inquiry</label>
            </div>
            <div>
              <input type="radio" id="username" name="username" />
              <label htmlFor="username">General Inquiry</label>
            </div>
            <div>
              <input type="radio" id="username" name="username" />
              <label htmlFor="username">General Inquiry</label>
            </div>
          </div>
        </div>
        <div className={styles.message}>
          <label htmlFor="username">Message</label>
          <textarea
            id="myTextarea"
            rows="8"
            style={{ width: "100%", resize: "none", padding: ".5rem" }}
            placeholder="Write your message.."
            className={styles.textArea}
          />
        </div>
        <div className={styles.sendMessage}>
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUI;
