import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import Results from './components/ContentComponents/Results';
import UserInputContainer from './components/InputComponents/UserInputContainer'

import './App.css';


//key
var api_key = `${process.env.REACT_APP_API_KEY}`;

if(typeof api_key === 'undefined') {
  api_key = `${process.env.WEATHER_API_KEY}`;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      weather: {}
    }
  }

  getWeather = (cityName, country, history) => {

    if(cityName && country) {
      let countryCode = country.toLowerCase();
      
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&units=imperial&appid=${api_key}`)
      .then(response => {
        this.setState({ weather: response.data })
        history.push("/results"); //navigate browser to /results
      })
      .catch(err => console.log(err));
    } else {
      alert('Fill out all the fields please!');
    }
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