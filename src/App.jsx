import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Portada } from './components/portada/Portada';
import { PrivateRoute } from './components/rutaPublicaPrivada/PrivateRoute';
import { PublicRoute } from './components/rutaPublicaPrivada/PublicRoute';

import Proyectos from './views/admin/Proyectos';
import Usuarios from './views/admin/Usuarios';
import NuevoProyecto from './components/Forms/NuevoProyecto';
import DetalleProyecto from './components/Forms/DetalleProyecto';
import { Info } from './views/todos/Info';


function App() {
  return (

    <div className='App'>
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route
            path='/'
            element={<PrivateRoute children={<h1>Hola</h1>} />}
          />
          <Route
            path='/usuarios'
            element={<PrivateRoute children={<Usuarios />} />}
          />
          <Route
            path='/proyectos'
            element={<PrivateRoute children={<Proyectos />} />}
          />
          <Route
            path='/proyectos/nuevo'
            element={<PrivateRoute children={<NuevoProyecto />} />}
          />
          <Route
            path='/proyectos/detalle/:id'
            element={<PrivateRoute children={<DetalleProyecto />} />}
          />
          <Route
            path='/settings'
            element={<PrivateRoute children={<Info />} />}
          />
          <Route
            path='/signin'
            element={<PublicRoute children={<Portada />} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
