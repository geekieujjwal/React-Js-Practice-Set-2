import logo from "./logo.svg";
import "./App.css";
import Greeting from "./Greeting";

function App() {
  const red = "#EE4B2B";
  const blue = "#89CFF0";
  const green = "#7FFFD4";

  return (
    <div className="App">
      <Greeting red={red} blue={blue} green={green} />
    </div>
  );
}

export default App;
