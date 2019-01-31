import React, { Component } from 'react';

import Header from './components/HeaderComponents/HeaderContainer';
import UserInput from './components/InputComponents/UserInputContainer'

import './normalize.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
      country: ''
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <UserInput />
      </div>
    );
  }
}

export default App;