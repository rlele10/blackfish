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
            Are you a Patient or Provider? 
          </Header>

          <br></br>

          <div style={{textAlign: 'center'}}>
            <NavLink to="/patient-intake">
              <SubmitButton >
                Patient
              </SubmitButton>
            </NavLink>
          </div>

          <br></br>

          <div style={{textAlign: 'center'}}>
            <NavLink to="/provider-intake">
              <SubmitButton>
                Provider
              </SubmitButton>
            </NavLink>
          </div>

          <br></br>

          <Header as='h3' textAlign='center'> 
            If test results are ready you can view them &nbsp;
            <NavLink to="/my-test-results">
               here.
            </NavLink>
          </Header>
      </>
    
    );
};

export default CovidTesting;