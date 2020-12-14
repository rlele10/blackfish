import React from 'react';
import { NavLink } from "react-router-dom";
import { Header } from 'semantic-ui-react';
import OrcaLogo from '../components/images/OrcaLogo';
import { SubmitButton } from '../components/styles/Button';


const CovidTesting= props => {
  console.log(props)
  
    return (
      <>
      <OrcaLogo></OrcaLogo>

          <Header as='h2' textAlign='center'> 
            COVID-19 Testing 
          </Header>

          <br></br>

          <Header as='h3' textAlign='center'> 
            If this is your first time testing with Orca Biotech please select from the following: 
          </Header>

          <br></br>

          <Header as='h3' textAlign='center'> 
            Are you a Patient or Provider? 
          </Header>

          <br></br>

          <div style={{textAlign: 'center'}}>
            <NavLink to="/patient-intake">
              <SubmitButton >
                I am a Patient
              </SubmitButton>
            </NavLink>
          </div>

          <br></br>

          <div style={{textAlign: 'center'}}>
            <NavLink to="/provider-intake">
              <SubmitButton>
                I am a Provider
              </SubmitButton>
            </NavLink>
          </div>

          <br></br>
          <br></br>

          <Header as='h3' textAlign='center'> 
            If you've received an email saying results are ready click the button below.
          </Header>

          <br></br>

          <div style={{textAlign: 'center'}}>
            <NavLink to="/my-test-results">
              <SubmitButton>
                View Results
              </SubmitButton>
            </NavLink>
          </div>
      </>
    
    );
};

export default CovidTesting;