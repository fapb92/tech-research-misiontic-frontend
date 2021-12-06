import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Portada } from "./components/portada/Portada";
import { NavBar } from './components/NavBar/NavBar';
import { Usuarios } from "./components/users/Usuarios";
import { Proyectos } from "./components/projects/Proyectos";

function App() {
  const user = true;
  return (
    <div className="App">
      <Router>
        {user ? <NavBar /> : null}
        <Routes>
          <Route path="/" element={user ? null : <Portada />} />
          <Route path="/users" element={user ? <Usuarios /> : <Navigate to="/" replace />} />
          <Route path="/projects" element={user ? <Proyectos /> : <Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
