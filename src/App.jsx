import Display from "./Components/Display";
import ButtonsContainer from "./Components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";
import Heading from "./Components/Heading";

function App() {
  const [calVal, setCalVal] = useState("");

  const operators = ["+", "-", "*", "/"];

  const isOperator = (char) => operators.includes(char);

  const isValidExpression = (exp) => {
    return /^[0-9+\-*/().\s]+$/.test(exp);
  };

  const onButtonClicked = (buttonText) => {
    const lastChar = calVal.slice(-1);


    if (buttonText === "C") {
      setCalVal("");
      return;
    }

    if (buttonText === "←") {
      setCalVal(calVal.slice(0, -1));
      return;
    }

    if (buttonText === "=") {
      try {
        if (
          calVal === "" ||
          isOperator(lastChar) ||
          !isValidExpression(calVal)
        ) {
          setCalVal("Error");
          return;
        }

        const result = Function(`"use strict"; return (${calVal})`)();
        setCalVal(result.toString());
      } catch {
        setCalVal("Error");
      }
      return;
    }

    if (isOperator(buttonText) && isOperator(lastChar)) {

      setCalVal(calVal.slice(0, -1) + buttonText);
      return;
    }

    if (calVal === "" && isOperator(buttonText) && buttonText !== "-") {
      return;
    }

    setCalVal(calVal + buttonText);
  };

  return (

    <div className={styles.app}>
      <div className={styles.calculator}>
        <Heading />
        <Display displayValue={calVal} />
        <ButtonsContainer onButtonClicked={onButtonClicked} />
      </div>
    </div>
  );
}

export default App;
