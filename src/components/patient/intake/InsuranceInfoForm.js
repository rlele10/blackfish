import React, { Component } from 'react';
import { Container, Grid, Form, Header} from 'semantic-ui-react';
import { SubmitButton } from '../../styles/Button';
import { NavLink } from 'react-router-dom';
import Disclaimer from '../../shared/Disclaimer';

class InsuranceInfoForm extends Component {
  state = { 
    insuranceCompany: '',
    policyNum: '',
    insuranceStreetAddress: '',
    insuranceCity: '',
    insuranceState: '',
    insuranceZip: '',
    insuranceCardFront: '',
    insuranceCardBack: '',
  }
  componentDidMount () {
    if (this.props.id) {
      const { insuranceCompany, policyNum, insuranceStreetAddress, insuranceCity, insuranceState, insuranceZip, insuranceCardFront, insuranceCardBack} = this.props
      this.setState({ insuranceCompany, policyNum, insuranceStreetAddress, insuranceCity, insuranceState, insuranceZip, insuranceCardFront, insuranceCardBack })
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
        insuranceCompany: '', 
        policyNum: '',
        insuranceStreetAddress: '',
        insuranceCity: '',
        insuranceState: '',
        insuranceZip: '',
        insuranceCardFront: '',
        insuranceCardBack: '',
      }
    )
  }

  render() {
    const { insuranceCompany, policyNum, insuranceStreetAddress, insuranceCity, insuranceState, insuranceZip, insuranceCardFront, insuranceCardBack } = this.state

    return (
    <Container>
      <Grid centered >
        <Grid.Row >
          <Grid.Column width={12}>
          <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <Form.Input 
                  label="Insurance Company" 
                  placeholder="Insurance Company"
                  name = "insuranceCompany"
                  value = {insuranceCompany}
                  onChange={this.handleInputChange}
                  required
                />
              </Form.Field>
              <Form.Field>
                  <Form.Input 
                    label="Member ID or Policy Number" 
                    placeholder="Member ID or Policy Number"
                    name = "policyNum"
                    value = {policyNum}
                    onChange={this.handleInputChange}
                    required
                  />
              </Form.Field>
              <Header as='h3' style={{marginTop: '1em'}}>
                Insurance Company Address                                
              </Header>
              <Form.Field >
                <Grid >
                  <Grid.Row >
                    <Grid.Column width={24}>
                      <Form.Group widths='equal'>
                        <Form.Input
                          label="Street Address" 
                          placeholder="Street Address"
                          name = "insuranceStreetAddress"
                          value = {insuranceStreetAddress}
                          onChange={this.handleInputChange}
                          required
                        />
                      <Form.Input 
                        label="City" 
                        placeholder="City"
                        name = "insuranceCity"
                        value = {insuranceCity}
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
                          label="State" 
                          placeholder="State"
                          name = "insuranceState"
                          value = {insuranceState}
                          onChange={this.handleInputChange}
                          required
                        />
                        <Form.Input 
                          label="Zip Code" 
                          placeholder="Zip Code"
                          name = "insuranceZip"
                          value = {insuranceZip}
                          onChange={this.handleInputChange}
                          required
                        />
                      </Form.Group>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Form.Field>
            <Header as='h3' style={{marginTop: '1em'}}>
              Image Upload                                
            </Header>
            <Form.Field>
              <Form.Input 
                  label="Insurance Card Front Picture " 
                  placeholder="Insurance Card Front Picture "
                  name = "insuranceCardFront"
                  value = {insuranceCardFront}
                  type = "file"
                  onChange={this.handleInputChange}
                  required
                />
            </Form.Field>
            <Form.Field>
              <Form.Input 
                  label="Insurance Card Back Picture " 
                  placeholder="Insurance Card Back Picture "
                  name = "insuranceCardBack"
                  value = {insuranceCardBack}
                  type = "file"
                  onChange={this.handleInputChange}
                  required
                />
            </Form.Field>
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
  
  export default InsuranceInfoForm;


