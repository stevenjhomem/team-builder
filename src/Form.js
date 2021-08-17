import React, { useState } from 'react';
import { ReactDOM } from 'react';
import './Form.css';

function Form(){

    const [formValues, setFormValues] = useState({
        firstName : '',
        lastName : '',
        age : '',
        gender : '',
        jobPreference : '',
        currentJobRole : '',
        jobLocationPreference : '',
        currentJobLocation : '',
    });

    const onValueChange = event => {
        setFormValues({
            ...formValues,
            [event.target.name] : event.target.value
        });
    };

    return(
        <form className = 'formInformation'>
            <label>
                First Name: 
                <input
                    type = 'text'
                    maxLength = '25'
                    placeholder = "Enter First Name"
                    onChane = {onValueChange}
                    name = 'firstName'
                    id = 'firstNameInput'
                />
            </label>
            <label>
                Last Name: 
                <input
                    type = 'text'
                    maxLength = '25'
                    placeholder = "Enter Last Name"
                    onChange = {onValueChange}
                    name = 'lastName'
                    id = 'lastNameInput'
                />
            </label>
            <label>
                Age:
                <input 
                    name="age"
                    placeholder = "Enter Your Age"
                    id = 'ageInput'
                />
            </label>
            <label>
                Gender:
                <select>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Prefer not to identify.</option>
                </select>
            </label>
            <label>
                Development Preference:
                <select>
                    <option>Back End Developer</option>
                    <option>Front End Developer</option>
                    <option>Designer</option>
                </select>
            </label>
            <label>
                Current Development Role:
                <select>
                    <option>Back End Developer</option>
                    <option>Front End Developer</option>
                    <option>Designer</option>
                </select>
            </label>
            <label>
                Job Location Preference:
                <select>
                    <option>Remote</option>
                    <option>In Office</option>
                    <option>Some Remote, Some In Office</option>
                </select>
            </label>
            <label>
                Job Location Preference:
                <select>
                    <option>Remote</option>
                    <option>In Office</option>
                    <option>Some Remote, Some In Office</option>
                </select>
            </label>
        </form>
    )

};

    

export default Form;