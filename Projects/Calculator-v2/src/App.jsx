import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  let [display, setDisplay] = useState("");
  const handleButtonClicked = (button) => {
    if (button === "C") {
      setDisplay("");
    } else if (button === "=") {
      const result = eval(display);
      setDisplay(result);
    } else {
      const newDisplayValue = display + button;
      setDisplay(newDisplayValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display display={display}></Display>
      <ButtonContainer
        handleButtonClicked={handleButtonClicked}
      ></ButtonContainer>
    </div>
  );
}

export default App;
