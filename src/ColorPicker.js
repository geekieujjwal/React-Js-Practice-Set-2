import { useState } from "react";

const ColorPicker = ({ red, blue, green }) => {
  const [showRed, isShowRed] = useState("");

  const showCodeRed = () => {
    isShowRed(red);
  };

  const [showBlue, isShowBlue] = useState("");

  const showCodeBlue = () => {
    isShowBlue(blue);
  };

  const [showGreen, isShowGreen] = useState("");

  const showCodeGreen = () => {
    isShowGreen(green);
  };

  return (
    <div>
      <h1>Color Picker</h1>
      <button onClick={showCodeRed}>Red Color</button>
      <p>{showRed}</p>
      <hr />
      <button onClick={showCodeBlue}>Blue Color</button>
      <p>{showBlue}</p>
      <hr />
      <button onClick={showCodeGreen}>Green Color</button>
      <p>{showGreen}</p>
    </div>
  );
};

export default ColorPicker;
