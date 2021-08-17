import React, { useEffect, useState } from 'react';
import Form from './Form.js';
import logo from './logo.svg';
import './App.css';

function App() {

  const [currentTeam, setCurrentTeam]=useState([]);
  const [formValues, setFormValues] = useState({

    firstName : '',
    lastName : '',
    age : '',
    gender : 'Male',
    jobPreference : 'Back End Developer',
    currentJobRole : 'Back End Developer',
    jobLocationPreference : 'Remote',
    currentJobLocation : 'Remote',

});

useEffect(() =>{
  
})

  const onFormSubmit = event => {
    event.preventDefault();
    const newTeamMember = {
      firstName : formValues.firstName.trim(),
      lastName : formValues.lastName.trim(),
      age : formValues.age.trim(),
      gender : formValues.gender,
      jobPreference : formValues.jobPreference,
      currentJobRole : formValues.currentJobRole,
      jobLocationPreference: formValues.jobLocationPreference,
      currentJobLocation : formValues.currentJobLocation,
    };

    setCurrentTeam(currentTeam.concat(newTeamMember));
    
};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Let's Get All Of Your Information!
        </h1>
    
      </header>
      <div>
        <h2>Current Team Members</h2>
        <ol>{currentTeam.map( (member, index) => <li key ={index} >{member.firstName} {member.lastName} </li>
        )}
        </ol>
      </div>
      <Form currentTeam = {currentTeam} formValues = {formValues} setFormValues = {setFormValues}
      onFormSubmit = {onFormSubmit} />
    </div>
  );
}

export default App;
