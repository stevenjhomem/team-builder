import React from 'react';
import { ReactDOM } from 'react';
import './Form.css';

function Form(props){

    const { currentTeam, formValues, setFormValues, onFormSubmit} = props;

    const onValueChange = event => {
            setFormValues({...formValues, [event.target.name] : event.target.value})
    };

    return(
        <form className = 'formInformation' onSubmit = {onFormSubmit}>
            <label>
                First Name: 
                <input
                    onChange = {onValueChange}
                    type = 'text'
                    maxLength = '25'
                    placeholder = "Enter First Name"
                    name = 'firstName'
                    id = 'firstNameInput'
                />
            </label>
            <label>
                Last Name: 
                <input
                    onChange = {onValueChange}
                    type = 'text'
                    maxLength = '25'
                    placeholder = "Enter Last Name"
                    name = 'lastName'
                    id = 'lastNameInput'
                />
            </label>
            <label>
                Age:
                <input 
                    onChange = {onValueChange}
                    name="age"
                    placeholder = "Enter Your Age"
                    id = 'ageInput'
                    />
                
            </label>
            <label>
                Gender:
                <select name = "gender" onChange = {onValueChange}>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Prefer not to identify.</option>
                </select>
            </label>
            <label>
                Development Preference:
                <select name = 'jobPreference' onChange = {onValueChange}>
                    <option>Back End Developer</option>
                    <option>Front End Developer</option>
                    <option>Designer</option>
                </select>
            </label>
            <label>
                Current Development Role:
                <select name = 'currentJobRole' onChange = {onValueChange}>
                    <option>Back End Developer</option>
                    <option>Front End Developer</option>
                    <option>Designer</option>
                </select>
            </label>
            <label>
                Job Location Preference:
                <select name = 'jobLocationPreference' onChange = {onValueChange}>
                    <option>Remote</option>
                    <option>In Office</option>
                    <option>Some Remote, Some In Office</option>
                </select>
            </label>
            <label>
                Current Job Location:
                <select name = "currentJobLocation" onChange = {onValueChange}>
                    <option>Remote</option>
                    <option>In Office</option>
                    <option>Some Remote, Some In Office</option>
                </select>
            </label>
            <label>
                <button 
                id = 'submitButton' 
                type = 'submit'
                >
                Join Our Team!
                </button>
            </label>
        </form>
    )

};

    

export default Form;