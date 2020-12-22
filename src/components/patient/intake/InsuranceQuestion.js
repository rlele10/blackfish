import React, { Component } from 'react';
import { Container, Grid, Form, Header} from 'semantic-ui-react';
import { SubmitButton } from '../../styles/Button';
import { NavLink } from 'react-router-dom';
import Disclaimer from '../../shared/Disclaimer';
import OrcaLogo from '../../images/OrcaLogo';
import InsuranceInfoForm from './InsuranceInfoForm';
import SSNInfoForm from './SSNInfoForm';
import StripePayment from '../../payments/Stripe';

class InsuranceQuestion extends Component {
  state = { insuranceOptions: null  }

  handleInputChange = (e) => {
    this.setState({ value: e.target.value});
    console.log(e.target)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState(
      { 
      }
    )
  }

  render() {

    const insuranceOptions = [
      { key: '0', text: 'Y - I have health insurance that will be billed for this test', value: 'yes'},
      { key: '1', text: 'N - I do not have health insurance', value: 'no'},
      { key: '2', text: 'Opt Out - Do not bill my insurance I will pay', value: 'opt_out'},
    ]

    return (
    <Container>
      <OrcaLogo></OrcaLogo>
        <Grid centered >
          <Grid.Row >
            <Grid.Column width={12}>
            <Header as='h3' style={{marginTop: '1em'}}>
              Health Insurance                               
            </Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Select
                options={insuranceOptions}
                label="Do you have health insurance to be billed?" 
                placeholder="Health insurance options"
                name = "insurance"
                onChange={this.handleInputChange}
                required
                fluid
              />

              {insuranceOptions && insuranceOptions.value === "Y - I have health insurance that will be billed for this test" ? (
                <InsuranceInfoForm />
              ) : insuranceOptions && insuranceOptions.value === "no" ? (
                <SSNInfoForm />
              ) : insuranceOptions && insuranceOptions.value === "opt_out" ? (
                <StripePayment />
              ) : null}
              
              <SubmitButton  type="submit" >Submit</SubmitButton>
            </Form>
          </Grid.Column>
        </Grid.Row>
        <Disclaimer></Disclaimer>
          <div style={{ marginTop: '1em', paddingBottom: '1em'}}>
            <NavLink to="/photo-id-info" activeClassName="active" style={{fontSize: '1.25em', color: '#0058A2', padding: '2em'}}>
              Back
            </NavLink>
        </div>  
      </Grid>
    </Container>

      );
    }
  }
  
  export default InsuranceQuestion;




