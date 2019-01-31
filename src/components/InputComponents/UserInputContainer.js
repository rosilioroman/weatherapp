import React from 'react';

function UserInputContainer(props) {
    return (
        <form className="user-input-wrapper">
            <input 
                type="text" 
                placeholder="city" 
                name="city"
                className="user-input-field"
                onChange={props.inputChangeHandler}
            />
            <input 
                type="text" 
                placeholder="country" 
                name="country"
                className="user-input-field"
                onChange={props.inputChangeHandler}
            />
            <button>Get Weather</button>
        </form>
    );
}

export default UserInputContainer;