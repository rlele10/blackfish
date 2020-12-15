import React from 'react';
import { NavLink } from "react-router-dom";
import { StyledH1, StyledH2, StyledH3 } from '../components/styles/Header'
import OrcaLogo from '../components/images/OrcaLogo';
import { SubmitButton } from '../components/styles/Button';


const CovidTesting= props => {
  console.log(props)
  
    return (
      <>
      <OrcaLogo></OrcaLogo>
          <StyledH1> 
            COVID-19 Testing 
          </StyledH1>
          <StyledH2> 
            Patients
          </StyledH2>
          <StyledH3> 
            If this is your first time testing with Orca Biotech, please register below:
          </StyledH3>
          <div style={{textAlign: 'center'}}>
            <NavLink to="/patient-intake">
              <SubmitButton >
                Patient Registration
              </SubmitButton>
            </NavLink>
          </div>
          <StyledH3> 
            If you've received an email saying results are ready, click the button below:
          </StyledH3>
          <div style={{textAlign: 'center' }}>
            <NavLink to="/my-test-results">
              <SubmitButton>
                COVID Test Results
              </SubmitButton>
            </NavLink>
          </div>
          <StyledH2> 
            Providers
          </StyledH2>
          <StyledH3> 
          Register below before administering COVID tests to your patients:
          </StyledH3>
          <div style={{textAlign: 'center', paddingBottom: '2em'}}>
            <NavLink to="/provider-intake">
              <SubmitButton>
                Provider Registration
              </SubmitButton>
            </NavLink>
          </div>
      </>
    );
};

export default CovidTesting;