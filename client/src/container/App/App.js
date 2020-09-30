import React, { Component } from 'react';
import styles from './App.module.scss';
import Posts from '../../components/Posts';

class App extends Component {
  render(){
    return (
      <div className={styles.App}>
        <h1>H1 Header within 'App' component</h1>
        <Posts />
      </div>
    );
  }
}

export default App;
