import React, { Component } from 'react';

class UserInputContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            country: ''
        }
    }
    //dynamic onChange handler
    inputChangeHandler = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    getWeather = event => {
        event.preventDefault(); //prevent the form from refreshing the page
        this.props.getWeather(this.state.city, this.state.country, this.props.history); //invoke getWeather() from App.js
        this.setState({city: '', country: ''}); //reset state
    }

    render() {
        return (
            <form className="user-input-wrapper" onSubmit={this.getWeather}>
                <input 
                    type="text" 
                    placeholder="city" 
                    name="city"
                    className="user-input-field"
                    onChange={this.inputChangeHandler}
                />
                <input 
                    type="text" 
                    placeholder="country" 
                    name="country"
                    className="user-input-field"
                    onChange={this.inputChangeHandler}
                />
                <button type="submit">Get Weather</button>
            </form>
        );
    }
}

export default UserInputContainer;