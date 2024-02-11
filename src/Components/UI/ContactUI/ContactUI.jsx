import React from "react";
import styles from "./contactUI.module.css";
const ContactUI = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.left}>
        <div className={styles.information1}>Contact Information</div>
        <div className={styles.information2}>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <div>
              <img src="/contactUs/bxs_phone-call.svg" alt="call" />
            </div>
            <div>+1234567890</div>
          </div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <div>
              <img src="/contactUs/ic_sharp-email.svg" alt="call" />{" "}
            </div>
            <div>juman60000@gmail</div>
          </div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <div>
              <img src="/contactUs/carbon_location-filled.svg" alt="call" />
            </div>
            <div>NIT Silchar</div>
          </div>
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
            <input
              type="text"
              id="username"
              name="username"
              placeholder="+12 198739879"
            />
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
