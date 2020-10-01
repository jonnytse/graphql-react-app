import React, { Component } from 'react';
import styles from './App.module.scss';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//components to import and nest in root component aka App.js
import Posts from '../../components/Posts';
import Users from '../../components/Users';

//apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

class App extends Component {
  render(){
    return (
      <ApolloProvider client={client}>
        <div className={styles.App}>
          <h1>React-GraphQL App</h1>
          <Posts />
          <Users />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
