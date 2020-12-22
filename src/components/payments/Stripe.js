import React from 'react';
import { NavLink } from "react-router-dom";
import { Header } from 'semantic-ui-react';
import OrcaLogo from '../images/OrcaLogo';




const StripePayment= props => {
  console.log(props)
 
    return (
      <>
        <NavLink to="/" >
          <OrcaLogo></OrcaLogo>
        </NavLink>
          <Header as='h3' textAlign='center'>Stripe Payment Integration</Header>
      </>
    );
};

export default StripePayment;

