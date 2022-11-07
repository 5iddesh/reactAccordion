import InitialItems from "./Data";
import Accordian from "./Accordian";
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <Accordian InitialItems={InitialItems} />
    </div>
  );
}
