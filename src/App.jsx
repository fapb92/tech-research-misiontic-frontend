import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';

import { Portada } from './components/portada/Portada';
import { PrivateRoute } from './components/rutaPublicaPrivada/PrivateRoute';
import { PublicRoute } from './components/rutaPublicaPrivada/PublicRoute';

import ProyectosState from './Context/proyectosContext/ProyectosState';
import UsuariosState from './Context/usuariosContext/UsuariosState';

import Proyectos from './views/admin/Proyectos';
import Usuarios from './views/admin/Usuarios';
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
        <UsuariosState>
          <ProyectosState>
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
                    path='/signin'
                    element={<PublicRoute children={<Portada />} />}
                  />

                  <Route
                    path='/proyectos/nuevo'
                    element={<PrivateRoute children={<NuevoProyecto />} />}
                  />
                </Routes>
              </Router>
            </div>
          </ProyectosState>
        </UsuariosState>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
