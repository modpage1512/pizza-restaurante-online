import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Carlos Pizza, La mejor Pizza del universo
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Encuentra nuestros resturantes</h1>
          <p className={styles.text}>
            La guaria, edo Vargas
            <br /> Catia la mar
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
            Bogota, colombia
            <br /> calle nueva, 85022
            <br /> (602) 867-1011
          </p>
          <p className={styles.text}>
            Ciudad de mexico, mexico
            <br /> Montana
            <br /> (602) 867-1012
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Horarios de trabajo</h1>
          <p className={styles.text}>
            Lunes a viernes
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            Sabado - Domingo
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
