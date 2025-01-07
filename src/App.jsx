import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";
import "./App.css";

function App() {
  return (
    <div>
      <h1>React Components Example</h1>
      <ButtonComponent text="Click Me!" />
      <ImageComponent
        src="https://t3.ftcdn.net/jpg/03/15/34/90/360_F_315349043_6ohfFyx37AFusCKZtGQtJR0jqUxhb25Y.jpg"
        alt="A placeholder image"
      />
    </div>
  );
}

export default App;
