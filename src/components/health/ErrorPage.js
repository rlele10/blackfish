import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import OrcaHealthLogo from '../images/OrcaHealthLogo';

const ErrorPage = props => {
  console.log(props)
 
    return (
      <>
        <Container>
          <OrcaHealthLogo></OrcaHealthLogo>
            <Header as='h3' textAlign='center'>
              We are currently under construction. Sorry for the inconvenience. We will be back soon with some awesome features. 
            </Header>
        </Container>
      </>
    );
};

export default ErrorPage;

