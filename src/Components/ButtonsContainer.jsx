import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClicked }) => {
  const buttonNames = [
    "C", "←", "/", "*",
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", "=",
    "0", ".",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button key={buttonName} className={styles.button} onClick={() => onButtonClicked(buttonName)}>{buttonName} </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;