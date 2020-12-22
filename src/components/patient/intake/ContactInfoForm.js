import React, { Component } from 'react';
import { Container, Grid, Form, Header} from 'semantic-ui-react';
import { SubmitButton } from '../../styles/Button';
import { NavLink } from 'react-router-dom';
import Disclaimer from '../../shared/Disclaimer';
import OrcaLogo from '../../images/OrcaLogo';

class ContactInfoForm extends Component {
  state = { 
    phoneNum: '', 
    email: '', 
    streetAddress: '',  
    city: '',
    zipCode: '',
    county: '',
  }
  componentDidMount () {
    if (this.props.id) {
      const { phoneNum, email, streetAddress, city, zipCode, county} = this.props
      this.setState({ phoneNum, email, streetAddress, city, zipCode, county})
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState(
      { 
        phoneNum: '', 
        email: '', 
        streetAddress: '', 
        city: '',
        state: '',
        zipCode: '',
        county: '',
      }
    )
  }

  render() {
    const { phoneNum, email, streetAddress, city, state, zipCode, county} = this.state

    return (
    <Container>
    <OrcaLogo></OrcaLogo>
    <Grid centered >
      <Grid.Row >
        <Grid.Column width={12}>
          <Header as='h3' style={{marginTop: '1em'}}>
            Contact Information                                 
          </Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <Form.Input 
                    label="Phone Number (legal guardians for minors)" 
                    placeholder="(###) ###-####"
                    name = "phoneNum"
                    value = {phoneNum}
                    type = "tel"
                    onChange={this.handleInputChange}
                    required
                  />
                </Form.Field>
                <Form.Field>
                    <Form.Input 
                      label="Email" 
                      placeholder="Email"
                      name = "email"
                      value = {email}
                      type = "email"
                      onChange={this.handleInputChange}
                      required
                    />
                </Form.Field>
                <Form.Field>
                  <Header as='h3' style={{marginTop: '1em'}}>
                    Current residence                                  
                  </Header>
                  <Form.Input 
                    label="Street Address" 
                    placeholder="Street Address"
                    name = "streetAddress"
                    value = {streetAddress}
                    onChange={this.handleInputChange}
                    required
                  />
                </Form.Field>
                <Form.Field >
                  <Grid >
                    <Grid.Row >
                      <Grid.Column width={24}>
                        <Form.Group widths='equal'>
                          <Form.Input 
                              label="City" 
                              placeholder="City"
                              name = "city"
                              value = {city}
                              onChange={this.handleInputChange}
                              required
                          />
                          <Form.Input 
                              label="State" 
                              placeholder="State"
                              name = "state"
                              value = {state}
                              onChange={this.handleInputChange}
                              required
                            />
                          </Form.Group>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Form.Field>
                  <Form.Field >
                    <Grid >
                      <Grid.Row >
                        <Grid.Column width={24}>
                          <Form.Group widths='equal'>
                            <Form.Input
                              label="Zip Code" 
                              placeholder="Zip Code"
                              name = "zipCode"
                              value = {zipCode}
                              onChange={this.handleInputChange}
                              required
                            />
                            <Form.Input 
                              label="County" 
                              placeholder="(eg. Utah County, Salt Lake County)"
                              name = "county"
                              value = {county}
                              onChange={this.handleInputChange}
                              required
                            />
                          </Form.Group>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Form.Field>
                  <SubmitButton  type="submit" >Submit</SubmitButton>
                </Form>
              </Grid.Column>
            </Grid.Row>
            <Disclaimer></Disclaimer>
            <div style={{ marginTop: '1em', paddingBottom: '1em'}}>
              <NavLink to="/general-info" activeClassName="active" style={{fontSize: '1.25em', color: '#0058A2', padding: '2em'}}>
                Back
              </NavLink>
              <NavLink to="/demographic-info" activeClassName="active" style={{fontSize: '1.25em', color: '#0058A2', padding: '2em'}}>
                Continue
              </NavLink>
            </div>  
      </Grid>
    </Container>
      );
    }
  }
  
  export default ContactInfoForm;


