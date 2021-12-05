import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Portada } from "./components/portada/Portada";
import { NavBar } from './components/NavBar/NavBar';

function App() {
  const user = false
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={user ? <NavBar /> : <Portada />} />
        </Routes>



      </Router>
    </div>
  );
}

export default App;
