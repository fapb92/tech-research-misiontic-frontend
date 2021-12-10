import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Portada } from "./components/portada/Portada";
import { Usuarios } from "./components/users/Usuarios";
import { Proyectos } from "./components/projects/Proyectos";
import { PrivateRoute } from "./components/rutaPublicaPrivada/PrivateRoute";
import { PublicRoute } from "./components/rutaPublicaPrivada/PublicRoute";
import { useAuth } from "./Authentication/Auth";
import { useEffect } from "react";

function App() {
  const { user, isAuth, loginUser } = useAuth()

  useEffect(() => {
    console.log(user, isAuth);
  }, [isAuth, user, loginUser])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute children={<h1>Hola</h1>} />} />
          <Route path="/users" element={<PrivateRoute children={<Usuarios />} />} />
          <Route path="/projects" element={<PrivateRoute children={<Proyectos />} />} />
          <Route path="/signin" element={<PublicRoute children={<Portada />} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
