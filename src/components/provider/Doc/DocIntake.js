import React from 'react';
import OrcaLogo from '../../images/OrcaLogo';
import {  Header } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";


const DocIntakeForm = props => {
  console.log(props)
 
    return (
      <>
        <NavLink to="/" >
          <OrcaLogo></OrcaLogo>
        </NavLink>
        <Header as='h2' textAlign='center'>DOC Intake Form</Header>
          <div style={{textAlign: 'center'}}>
            <iframe 
              title="DOC Intake Form" src="https://airtable.com/embed/shryRuh2Aksxen12R?backgroundColor=purple" frameborder="0" onmousewheel="" width="75%" height="1000" style={{marginBottom: '4em'}}>
            </iframe>
          </div>
      </>
    );
};

export default DocIntakeForm;