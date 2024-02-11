import React, { useState } from "react";
import styles from "./contactUI.module.css";

const ContactUI = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [Phone, setPhone] = useState();
  const [subject, setSubject] = useState();
  const [msg, setMsg] = useState();

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePhoneChange(event) {
    setPhone(event.target.value);
  }
  function handleRadioClick(event, id) {
    setSubject(id);
  }
  function handleMessage(event) {
    setMsg(event.target.value);
  }

  // console.log(firstName);
  // console.log(subject);
  // console.log(msg);
  return (
    <div className={styles.contactContainer}>
      <div className={styles.left}>
        <div className={styles.information1}>
          Contact Information <br />
          <span style={{ color: "#C9C9C9", fontSize: ".8rem" }}>
            Say something to start a live chat!
          </span>
        </div>
        <div className={styles.information2}>
          <div className={styles.infoImage}>
            <div>
              <img src="/contactUs/bxs_phone-call.svg" alt="call" />
            </div>
            <div>+1234567890</div>
          </div>
          <div className={styles.infoImage}>
            <div>
              <img src="/contactUs/ic_sharp-email.svg" alt="email" />{" "}
            </div>
            <div>juman60000@gmail</div>
          </div>
          <div className={styles.infoImage}>
            <div>
              <img src="/contactUs/carbon_location-filled.svg" alt="location" />
            </div>
            <div>NIT Silchar</div>
          </div>
        </div>
        <div className={styles.information3}>
          <div
            style={{ position: "relative", display: "flex", justifyContent: "center" }}
          >
            <img src="/contactUs/gola.svg" alt="gola" />
            <div style={{ position: "absolute", top: ".7rem", left: "1rem" }}>
              <img src="/contactUs/fb.svg" alt="gola" />
            </div>
          </div>
          <div
            style={{ position: "relative", display: "flex", justifyContent: "center" }}
          >
            <img src="/contactUs/gola.svg" alt="gola" />
            <div style={{ position: "absolute", top: ".67rem", left: ".85rem" }}>
              <img src="/contactUs/insta.svg" alt="gola" />
            </div>
          </div>
          <div
            style={{ position: "relative", display: "flex", justifyContent: "center" }}
          >
            <img src="/contactUs/gola.svg" alt="gola" />
            <div style={{ position: "absolute", top: ".7rem", left: ".84rem" }}>
              <img src="/contactUs/twitter.svg" alt="gola" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.inputFields}>
          <div>
            <label htmlFor="username">First Name</label>
            <br />
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleFirstNameChange}
            />
          </div>
          <div>
            <label htmlFor="username">Last Name</label>
            <br />
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleLastNameChange}
            />
          </div>
          <div>
            <label htmlFor="username">Email</label>
            <br />
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label htmlFor="username">Phone Number</label>
            <br />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="+12 198739879"
              onChange={handlePhoneChange}
            />
          </div>
        </div>
        <div className={styles.subject}>
          <div style={{ fontSize: "1.2rem", fontWeight: "600" }}>Select Subject?</div>
          <div className={styles.radioFields}>
            <div className={styles.radioContainer}>
              <input
                type="radio"
                id="username"
                name="username"
                onClick={(e) => {
                  handleRadioClick(e, "inquiry1");
                }}
              />
              <label htmlFor="username">General Inquiry</label>
            </div>
            <div className={styles.radioContainer}>
              <input
                type="radio"
                id="username"
                name="username"
                onClick={(e) => {
                  handleRadioClick(e, "inquiry2");
                }}
              />
              <label htmlFor="username">General Inquiry</label>
            </div>
            <div className={styles.radioContainer}>
              <input
                type="radio"
                id="username"
                name="username"
                onClick={(e) => {
                  handleRadioClick(e, "inquiry3");
                }}
              />
              <label htmlFor="username">General Inquiry</label>
            </div>
            <div className={styles.radioContainer}>
              <input
                type="radio"
                id="username"
                name="username"
                onClick={(e) => {
                  handleRadioClick(e, "inquiry4");
                }}
              />
              <label htmlFor="username">General Inquiry</label>
            </div>
          </div>
        </div>
        <div className={styles.message}>
          <label htmlFor="username" style={{ fontWeight: "600" }}>
            Message
          </label>
          <textarea
            id="myTextarea"
            placeholder="Write your message.."
            className={styles.textArea}
            onChange={handleMessage}
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
