import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { AuthProvider } from './Authentication/Auth';
import ProyectosState from './Context/proyectosContext/ProyectosState';

const client = new ApolloClient({
  uri: 'https://tech-research-back.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
        <ProyectosState>
          <App />
        </ProyectosState>
      </AuthProvider>
    </ApolloProvider>
  </React.StrictMode >
  ,
  document.getElementById('root')
);

