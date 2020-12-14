import React from 'react';
import { NavLink } from "react-router-dom";
import { Header } from 'semantic-ui-react';
import OrcaLogo from '../components/images/OrcaLogo';
import { SubmitButton } from '../components/styles/Button';


const Home= props => {
  console.log(props)
  
    return (
      <>
      <OrcaLogo></OrcaLogo>

          <Header as='h2' textAlign='center'> COVID-19 Testing </Header>

          <br></br>

          <Header as='h3' textAlign='center'> Are you a </Header>

          <br></br>

          <div style={{textAlign: 'center'}}>
            <NavLink to="/patient-intake">
              <SubmitButton>
                Patient
              </SubmitButton>
            </NavLink>
          </div>

          <Header as='h3' textAlign='center'> or</Header>

          <div style={{textAlign: 'center'}}>
            <NavLink to="/provider-intake">
              <SubmitButton>
                Provider
              </SubmitButton>
            </NavLink>
          </div>

          <br></br>
      </>
    
    );
};

export default Home;