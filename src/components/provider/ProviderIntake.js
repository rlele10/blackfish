import React from 'react';
import OrcaLogo from '../images/OrcaLogo';
import {  Header } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";


const ProviderIntakeForm = props => {
  console.log(props)
 
    return (
      <>
        <NavLink to="/" >
          <OrcaLogo></OrcaLogo>
        </NavLink>
        <Header as='h2' textAlign='center'>Provider Intake Form</Header>
          <div style={{textAlign: 'center'}}>
            <iframe 
              title="Provider Form" src="https://airtable.com/embed/shro8kXuZ3nXfnxvn?backgroundColor=purple" frameborder="0" onmousewheel="" width="75%" height="1000">
            </iframe>
          </div>
      </>
    
    );
};

export default ProviderIntakeForm;