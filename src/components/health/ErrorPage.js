import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import OrcaHealthLogo from '../images/OrcaHealthLogo';

const ErrorPage = props => {
  console.log(props)
 
    return (
      <>
        <Container>
          <OrcaHealthLogo></OrcaHealthLogo>
            <Header as='h4'>
              We are excited to announce that we are currently refactoring our software platform, bringing improvements to the following key features: 
            </Header>
              <ul>
                <li> Patient Acquisition </li>
                  <ul>
                    <li> Find a Specialist, Provider Profile, Scheduling, etc. </li>
                  </ul>
                <li> Patient Check-Ups </li>
                <ul>
                  <li> NPI, PROMs, PSAT, PUNS, etc. </li>
                </ul>
                <li> Patient Education </li>
                <ul>
                  <li> Pre-Hab, Re-Hab, Physical Therapy, Home Health, etc. </li>
                </ul>
                <li> Post-Visit Care Pathways </li>
                <ul>
                  <li> Digital Biomarkers, Range of Motion, etc. </li>
                </ul>
                <li> Pre-Visit Care Pathways </li>
                <ul>
                  <li> Directional Videos, Patient Intake, etc. </li>
                </ul>
                <li> Reputation Enhancement Campaigns </li>
                <ul>
                  <li> Google Reviews, Healthgrades, Orca, Yelp, etc. </li>
                </ul>
              </ul>

            <Header as='h4'>
              Qualitatively, the new system is designed to dramatically improve your patient’s experience, education, engagement, and outcomes. Quantitatively, the new system is designed to dramatically improve treatment uptake, automated feedback loops, and financial outcomes.
            </Header>

            <Header as='h4'>
              Join the waiting list for beta access <a href="https://orcahealth.typeform.com/to/bBIkfiaD#source=xxxxx">here.</a>
            </Header>
            
        </Container>
      </>
    );
};

export default ErrorPage;

