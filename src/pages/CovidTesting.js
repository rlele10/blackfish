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
            <Grid.Column width={12}>
              <Header as='h1' textAlign='center'> 
                COVID-19 Testing 
              </Header>
              <Header as='h2' style={{textDecoration: 'underline'}}> 
                Patients
              </Header>
              <Header as='h2'> 
                Test Registration
              </Header>
              <Header as='h3' textAlign='center'> 
                If this is your first time testing with Orca Biotech, please register below:
              </Header>
              <div style={{textAlign: 'center'}}>
                <NavLink to="/patient-intake">
                  <SubmitButton >
                    Patient Registration
                  </SubmitButton>
                </NavLink>
              </div>
              <Header as='h2'> 
                Test Results
              </Header>
              <Header as='h3' textAlign='center'> 
                If you've received an email saying results are ready, click the button below:
              </Header>
              <div style={{textAlign: 'center' }}>
                <NavLink to="/my-test-results">
                  <SubmitButton>
                    COVID-19 Test Results
                  </SubmitButton>
                </NavLink>
              </div>
              <Header as='h2' style={{textDecoration: 'underline'}}> 
                Providers
              </Header>
              <Header as='h2'> 
                Account Registration
              </Header>
              <Header as='h3' textAlign='center'> 
              Register below before administering COVID-19 tests to your patients:
              </Header>
              <div style={{textAlign: 'center', paddingBottom: '2em'}}>
                <NavLink to="/provider-intake">
                  <SubmitButton>
                    Provider Registration
                  </SubmitButton>
                </NavLink>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
};

export default CovidTesting;