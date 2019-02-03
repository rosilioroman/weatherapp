import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import Results from './components/ContentComponents/Results';
import UserInputContainer from './components/InputComponents/UserInputContainer'

import './normalize.css'

// Unique key for OpenWeatherMap API
const api_key = 'f437458d284235b298383bdc10a5b3a8';

class App extends Component {
  constructor() {
    super();
    this.state = {
      weather: {}
    }
  }

  getWeather = (cityName, country, history) => {
    let countryCode = country.toLowerCase();
    
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=${api_key}`)
    .then(response => {
      this.setState({ weather: response.data })
      history.push("/results"); //navigate browser to /results
    })
    .catch(err => console.log(err));
  }
  
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <Route exact path="/" render={props => <UserInputContainer {...props} inputChangeHandler={this.inputChangeHandler} getWeather={this.getWeather}/>} />
        <Route path="/results" render={props =>  <Results {...props} weather={this.state.weather}/>} />
      </div>
    );
  }
}

export default App;