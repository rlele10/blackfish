import React from 'react';
import OrcaLogo from '../images/OrcaLogo';


const PatientIntakeForm = props => {
  console.log(props)
 
    return (
      <>
        <OrcaLogo></OrcaLogo>
        <div>
          <iframe title="Patient Form" src="https://airtable.com/embed/shrEeksweHw0CKsEj?backgroundColor=purple" frameborder="0" onmousewheel="" width="100%" height="533">

          </iframe>
        </div>
      </>
    
    );
};

export default PatientIntakeForm;

