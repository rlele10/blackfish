import React from 'react';
import { NavLink } from "react-router-dom";
import { Header } from 'semantic-ui-react';
import PatientList from '../patient/PatientList';
import OrcaLogo from '../images/OrcaLogo';


const ProviderResultsShow = props => {
  console.log(props)
  
    return (
      <>
      <OrcaLogo></OrcaLogo>
          <Header as='h3' textAlign='center'>{props.location.state.Ordering_Provider_Name}'s Patient List</Header>
          <div style={{textAlign: 'center'}}>
            <PatientList location={props.location}></PatientList>
          </div>

          <br></br>

          <div style={{textAlign: 'center'}}>
            <NavLink to="/provider-results" activeClassName="active" style={{fontSize: '1.25em', color: '#0058A2'}}>
            Go Back
            </NavLink>
          </div>

          <br></br>
      </>
    
    );
};

export default ProviderResultsShow;

