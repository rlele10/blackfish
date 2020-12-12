import React from 'react';
import OrcaLogo from '../images/OrcaLogo';
import {  Header } from 'semantic-ui-react';


const ProviderIntakeForm = props => {
  console.log(props)
 
    return (
      <>
        <OrcaLogo></OrcaLogo>
        <Header as='h2' textAlign='center'>Provider Intake Form</Header>
          <iframe title="Provider Form" src="https://airtable.com/embed/shro8kXuZ3nXfnxvn?backgroundColor=purple" frameborder="0" onmousewheel="" width="100%" height="1000">
          </iframe>
      </>
    
    );
};

export default ProviderIntakeForm;