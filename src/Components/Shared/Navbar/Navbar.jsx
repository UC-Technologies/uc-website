import { useState } from "react";
import styles from "./Navbar.module.scss";
const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <nav>
        <a href="/">
          <img
            src="https://res.cloudinary.com/dvra8rj4n/image/upload/f_auto,q_auto/uzz9udxyddyqayl7nzfg"
            alt="UC_LOGO"
            className={styles.logo}
          />
        </a>
        <div className={styles.button_wrapper}>
          <button className={styles.btn_active} onClick={null}>
            HOME
          </button>
          <button className={styles.btn_active} onClick={null}>
            SERVICES
          </button>
          <button className={styles.btn_active} onClick={null}>
            PROJECTS
          </button>
          <button className={styles.btn_active} onClick={null}>
            ABOUT US
          </button>
          <button className={styles.contact_btn} onClick={null}>
            CONTACT US
          </button>
        </div>
        <div onClick={() => setToggle(!toggle)} className={styles.hamburger_icon}>
          <img
            className={styles.hamburger}
            src="https://res.cloudinary.com/dvra8rj4n/image/upload/v1708019749/jzabhpvs7vcp1mlkoi1d.svg"
            alt=""
          />
        </div>
      </nav>
      {toggle && (
        <div className={styles.toggle}>
          <div className={styles.mobile_menu}>
            <div onClick={() => setToggle(!toggle)} className={styles.close_btn}>
              <img
                src="https://res.cloudinary.com/dvra8rj4n/image/upload/v1708050656/tejsiynwnnxz3in8h1td.png"
                alt=""
              />
            </div>
            <ul>
              <li>HOME</li>
              <li>SERVICES</li>
              <li>PROJECTS</li>
              <li>ABOUT US</li>
              <li>CONTACT US</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
