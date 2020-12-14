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

          <Header as='h1' textAlign='center'> 
            COVID-19 Testing 
          </Header>

          <br></br>

          <Header as='h2' textAlign='center'> 
            Patients
          </Header>

          <Header as='h3' textAlign='center'> 
          If this is your first time testing with Orca Biotech, please register below:
          </Header>

          <br></br>

          <div style={{textAlign: 'center'}}>
            <NavLink to="/patient-intake">
              <SubmitButton >
                Patient Registration
              </SubmitButton>
            </NavLink>
          </div>

          <br></br>

  

          <Header as='h3' textAlign='center'> 
            If you've received an email saying results are ready, click the button below:
          </Header>

          <br></br>

          <div style={{textAlign: 'center'}}>
            <NavLink to="/my-test-results">
              <SubmitButton>
                COVID Results
              </SubmitButton>
            </NavLink>
          </div>

          <br></br>
          <br></br>

          <Header as='h2' textAlign='center'> 
            Providers
          </Header>

          <Header as='h3' textAlign='center'> 
          Register below before administering COVID tests to your patients:
          </Header>

          <br></br>

          <div style={{textAlign: 'center'}}>
            <NavLink to="/provider-intake">
              <SubmitButton>
                Provider Registration
              </SubmitButton>
            </NavLink>
          </div>

          <br></br>
          <br></br>
          <br></br>
          <br></br>


      </>
    
    );
};

export default CovidTesting;