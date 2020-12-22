import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import GeneralInfoForm from './GeneralInfoForm'

const RenderForm = props => {
  console.log(props)

    return (
    <Container>
          <Grid centered >
              <Grid.Row >
                  <Grid.Column width={12}>
                      <GeneralInfoForm />
                  </Grid.Column>
              </Grid.Row>
          </Grid>
    </Container>

      );
    }
  
  export default RenderForm;


