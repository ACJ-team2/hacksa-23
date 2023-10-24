import "./App.css";
import Calendar from "../Calandar /calandar";
import Class from "../class/class";

function App() {
  return (
    <div className="App">
      <div className="calendar">
        <Calendar />
      </div>
      <div className="class">
        <Class />
      </div>
    </div>
  );
}

export default App;