import React, { Component } from 'react';

import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import UserInputContainer from './components/InputComponents/UserInputContainer'

import './normalize.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
      country: ''
    }
  }

  //dynamic onChange handler
  inputChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <UserInputContainer inputChangeHandler={this.inputChangeHandler} />
      </div>
    );
  }
}

export default App;