import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';

import { Portada } from './components/portada/Portada';
import { NavBar } from './components/NavBar/NavBar';
// import { Usuarios } from './components/users/Usuarios';
// import { Proyectos } from './components/projects/Proyectos';

import ProyectosState from './Context/proyectosContext/ProyectosState';
import UsuariosState from './Context/usuariosContext/UsuariosState';

import Proyectos from './views/admin/Proyectos';
import NuevoProyecto from './components/Forms/NuevoProyecto';

import Usuarios from './views/admin/Usuarios';

const client = new ApolloClient({
  uri: 'https://tech-research-back.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

function App() {
  const user = true;
  return (
    <ApolloProvider client={client}>
      <UsuariosState>
        <ProyectosState>
          <div className='App'>
            <Router>
              {user ? <NavBar /> : null}
              <Routes>
                <Route path='/' element={user ? null : <Portada />} />
                {/* <Route
                path='/users'
                element={user ? <Usuarios /> : <Navigate to='/' replace />}
              /> */}
                {/* <Route
                path='/projects'
                element={user ? <Proyectos /> : <Navigate to='/' replace />}
              /> */}
                <Route exact path='/proyectos' element={<Proyectos />} />
                <Route
                  exact
                  path='/proyectos/nuevo'
                  element={<NuevoProyecto />}
                />
                <Route exact path='/usuarios' element={<Usuarios />} />
              </Routes>
            </Router>
          </div>
        </ProyectosState>
      </UsuariosState>
    </ApolloProvider>
  );
}

export default App;
