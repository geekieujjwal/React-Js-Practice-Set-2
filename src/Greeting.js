import { useState } from "react";

const Greeting = ({ red, blue, green }) => {
  const [selectedColor, setSelectedColor] = useState({
    red: "",
    blue: "",
    green: "",
  });

  const handleButton = (e) => {
    const { name, value } = e.target;

    if (selectedColor[name] !== "") {
      setSelectedColor((prev) => {
        return {
          ...prev,
          [name]: "",
        };
      });
    } else {
      setSelectedColor((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    }
  };

  return (
    <div>
      <h1>Color Picker</h1>
      <button onClick={handleButton} name="red" value={red}>
        Red Color
      </button>
      <p>{selectedColor.red}</p>
      <hr />
      <button onClick={handleButton} name="blue" value={blue}>
        Blue Color
      </button>
      <p>{selectedColor.blue}</p>
      <hr />
      <button onClick={handleButton} name="green" value={green}>
        Green Color
      </button>
      <p>{selectedColor.green}</p>
    </div>
  );
};

export default Greeting;
