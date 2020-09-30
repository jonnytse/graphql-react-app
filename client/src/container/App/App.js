import React, { Component } from 'react';
import styles from './App.module.scss';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//components to import and nest in root component aka App.js
import Posts from '../../components/Posts';

//apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
  // uri: 'https://fakerql.com/graphql'
})

class App extends Component {
  render(){
    return (
      <ApolloProvider client={client}>
        <div className={styles.App}>
          <h1>H1 Header within 'App' component</h1>
          <Posts />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
