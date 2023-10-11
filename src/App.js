import logo from "./logo.svg";
import "./App.css";
import ColorPicker from "./ColorPicker";

function App() {
  const red = "#EE4B2B";
  const blue = "#89CFF0";
  const green = "#7FFFD4";

  return (
    <div className="App">
      <ColorPicker red={red} blue={blue} green={green} />
    </div>
  );
}

export default App;

// Build a "Todo" React component that takes a prop called "todoItems". Inside the component, Display the title of a to-do item in a heading tag and the description in a paragraph. If the todoItem is completed, show the title and description in green color otherwise in red color.
