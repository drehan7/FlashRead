import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './layout/header';
import InputBox from './layout/inputBox';
import './App.css';

class App extends Component {


  quickRead = () => {
    return ['dkd','dkf'];
  }


  render() {
  return (
    <div className="App">
      <div className="container">
      <Header />
      <InputBox quickRead={this.quickRead}/>
      </div>
    </div>
  );
  }
}

export default App;
