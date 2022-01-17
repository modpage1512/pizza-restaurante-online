import styles from "../styles/Add.module.css";

const AddButton = ({ setClose }) => {
  return (
    <div onClick={() => setClose(false)} className={styles.mainAddButton}>
      Añadir Pizza a la base de datos
    </div>
  );
};

export default AddButton;
