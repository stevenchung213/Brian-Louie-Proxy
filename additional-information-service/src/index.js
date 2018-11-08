import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { PreQuery } from './Components/PreQuery.js';


const port = 8081;

const client = new ApolloClient({
  uri: `http://hr-fec-otb.us-west-1.elasticbeanstalk.com/:${port}/graphql`,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <PreQuery />
  </ApolloProvider>,
  document.getElementById('main'),
);
