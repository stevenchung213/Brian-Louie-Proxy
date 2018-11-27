import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { PreQuery } from './components/PreQuery.js';
import Main from './main.js';

const port = 8081;

// const client = new ApolloClient({
//   // uri: 'http://hr-fec-otb.us-west-1.elasticbeanstalk.com/graphql',
//   uri: 'http://localhost:8081/graphql'
// });

ReactDOM.render(
  <Main />,
  document.getElementById('main'),
);
