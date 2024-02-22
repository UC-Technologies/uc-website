import { useState } from "react";
import styles from "./Services.module.scss";
import CardService from "../../Service/CardService";
import CardPrototype from "../../Service/CardPrototype";

const Services = () => {
  const [active, setActive] = useState(1);
  return (
    <>
      <section className={styles.services}>
        <h1>Services</h1>
        <div className={styles.wrapper}>
          <CardService text="UI/UX" />
          <CardService text="Front end" />
          <CardService text="Back end" />
          <CardService text="UI/UX" />
        </div>
      </section>
      <section className={styles.prototypes}>
        <h1>Accepting Clients</h1>
        <div className={styles.wrapper}>
          <CardPrototype
            text="E commerce website"
            index={1}
            active={active}
            setActive={setActive}
          />
          <CardPrototype
            text="Portfolio"
            index={2}
            active={active}
            setActive={setActive}
          />
          <CardPrototype
            text="Business Websites"
            index={3}
            active={active}
            setActive={setActive}
          />
          <CardPrototype
            text="UI/UX Prototype"
            index={4}
            active={active}
            setActive={setActive}
          />
          <CardPrototype
            text="Blog Website"
            index={5}
            active={active}
            setActive={setActive}
          />
          <CardPrototype
            text="Booking Website"
            index={6}
            active={active}
            setActive={setActive}
          />
        </div>
      </section>
    </>
  );
};

export default Services;
