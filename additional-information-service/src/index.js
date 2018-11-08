import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { PreQuery } from './Components/PreQuery.js';
import normalizePort from 'normalize-port';

const port = normalizePort(process.env.PORT || '8081');

const client = new ApolloClient({
  uri: `http://localhost:${port}/graphql`,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <PreQuery />
  </ApolloProvider>,
  document.getElementById('main'),
);
