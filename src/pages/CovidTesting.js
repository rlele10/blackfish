import React from 'react';
import { NavLink } from "react-router-dom";
import { Header, Grid, Container } from 'semantic-ui-react';
import OrcaLogo from '../components/images/OrcaLogo';
import { SubmitButton } from '../components/styles/Button';


const CovidTesting= props => {
  console.log(props)
  
    return (
      <Container>
      <OrcaLogo></OrcaLogo>
        <Grid centered>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h1' textAlign='center'> 
                COVID-19 Testing 
              </Header>
              <Header as='h3' textAlign='center'> 
                If this is your first time testing with Orca Biotech, please select from the following to register:
              </Header>
              <div style={{textAlign: 'center', marginTop: '2em', marginBottom: '2em'}}>
                <NavLink to="/patient-intake">
                  <SubmitButton >
                    I am a Patient
                  </SubmitButton>
                </NavLink>
              </div>
              <div style={{textAlign: 'center', marginBottom: '2em'}}>
                <NavLink to="/provider-intake">
                  <SubmitButton>
                    I am a Provider
                  </SubmitButton>
                </NavLink>
              </div>
              <Header as='h3' textAlign='center'> 
                If you have received an email saying your results are ready, click the button below:
              </Header>
              <div style={{textAlign: 'center', marginTop: '2em', marginBottom: '2em'}}>
                <NavLink to="/my-test-results">
                  <SubmitButton>
                    COVID-19 Test Results
                  </SubmitButton>
                </NavLink>
              </div>
              <Header as='h3' textAlign='center'> 
                If you need support, please contact us via the button below:
              </Header>
              <div style={{textAlign: 'center', marginTop: '2em', marginBottom: '2em' }}>
                <a href="mailto:results@orcabiotech.com" >
                  <SubmitButton>
                    Support
                  </SubmitButton>
                </a>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
};

export default CovidTesting;