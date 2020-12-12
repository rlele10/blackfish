import React from 'react';
import OrcaLogo from '../images/OrcaLogo';
import {  Header } from 'semantic-ui-react';


const PatientIntakeForm = props => {
  console.log(props)
 
    return (
      <>
        <OrcaLogo></OrcaLogo>
        <Header as='h2' textAlign='center'>Patient Intake Form</Header>
          <iframe 
            title="Patient Form" src="https://airtable.com/embed/shrEeksweHw0CKsEj?backgroundColor=purple" frameborder="0" onmousewheel="" width="100%" height="1000">
          </iframe>
      </>
    
    );
};

export default PatientIntakeForm;

