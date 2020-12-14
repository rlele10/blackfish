import React, { PureComponent } from 'react';
import { Container, Grid, Form} from 'semantic-ui-react';
import { SubmitButton } from '../styles/Button'
import { withRouter } from 'react-router-dom';
import Disclaimer from '../shared/Disclaimer';
import OrcaLogo from '../images/OrcaLogo';


class ProviderResultsForm extends PureComponent {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {

    event.preventDefault();
    const userData = new FormData(event.target);
  
    let url = 'https://api.airtable.com/v0/appKhP0lyazMGCfUR/Providers/'+userData.get('record_id')+'/?api_key=keyKIECB3GLzSZLdQ'
    fetch(url)
      .then((resp) => resp.json())
      .then(data => {
        if(data.error)
         {
         alert("Patient list not found. Please double check you provider ID (sent via email), first name, last name, and NPI number. Ensure there are no spaces in entries.")
         }
        else{
         if(userData.get('provider_last_name')== data.fields.Provider_Last_Name) {  
      
          const { history } = this.props;
          if(history)
                {
                  history.push({ 
                    pathname: '/view-patient-list',
                    state : data.fields
                  });
                }
            
         }
         else{

           alert("Record does not match. Please enter correct details")
         }
         }
      }).catch(err => {
       
        // Error :(
      });
  }

  render() {

    return (

    <Container>
      <OrcaLogo></OrcaLogo>
          <Grid centered >
              <Grid.Row >
                  <Grid.Column width={12}>
                      <Form onSubmit={this.handleSubmit}>
                          <Form.Field>
                              <Form.Input 
                                label="Access Code" 
                                placeholder="Email Access Code" 
                                name = "record_id"
                                required
                              />
                          </Form.Field>
                          <Form.Field>
                              <Form.Input 
                                label="Last Name" 
                                placeholder="Last Name" 
                                name = "provider_last_name"
                                required
                              />
                          </Form.Field>
                          <Form.Field>
                              <Form.Input 
                                label="NPI Number" 
                                placeholder="NPI Number"
                                name = "npi_num"
                                required
                              />
                          </Form.Field>
                          <SubmitButton  type="submit" >View Patient List</SubmitButton>
                      </Form>
                  </Grid.Column>
              </Grid.Row>
              <Disclaimer></Disclaimer>
          </Grid>
    </Container>

      );
    }
  }
  
  
  export default withRouter(ProviderResultsForm);


