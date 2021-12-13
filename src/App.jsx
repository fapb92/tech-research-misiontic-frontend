import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';

import { Portada } from './components/portada/Portada';
import { Usuarios } from './components/users/Usuarios';
// import { Proyectos } from './components/projects/Proyectos';
import { PrivateRoute } from "./components/rutaPublicaPrivada/PrivateRoute";
import { PublicRoute } from "./components/rutaPublicaPrivada/PublicRoute";

import ProyectosState from './Context/proyectosContext/ProyectosState';
import Proyectos from './views/admin/Proyectos';
import NuevoProyecto from './components/Forms/NuevoProyecto';
import { AuthProvider } from './Authentication/Auth';

const client = new ApolloClient({
  uri: 'https://tech-research-back.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <ProyectosState>
          <div className='App'>
            <Router>
              <Routes>
                <Route path="/" element={<PrivateRoute children={<h1>Hola</h1>} />} />
                <Route path="/users" element={<PrivateRoute children={<Usuarios />} />} />
                <Route path="/proyectos" element={<PrivateRoute children={<Proyectos />} />} />
                <Route path="/signin" element={<PublicRoute children={<Portada />} />} />
                {/* <Route path='/' element={user ? null : <Portada />} />
              <Route
                path='/users'
                element={user ? <Usuarios /> : <Navigate to='/' replace />}
              /> */}
                {/* <Route
                path='/projects'
                element={user ? <Proyectos /> : <Navigate to='/' replace />}
              /> */}
                {/* <Route exact path='/proyectos' element={<Proyectos />} /> */}
                <Route
                  exact
                  path='/proyectos/nuevo'
                  element={<NuevoProyecto />}
                />
              </Routes>
            </Router>
          </div>
        </ProyectosState>
      </AuthProvider>
    </ApolloProvider>

  );
}

export default App;
