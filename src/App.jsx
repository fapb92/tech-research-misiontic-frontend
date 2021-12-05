import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Portada } from "./components/portada/Portada";

function App() {
  return (
    <div className="App">
      <Router>
        <Portada />

      </Router>
    </div>
  );
}

export default App;
