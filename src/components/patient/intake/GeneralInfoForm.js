import React, { Component } from 'react';
import { Container, Grid, Form, Header} from 'semantic-ui-react';
import { SubmitButton } from '../../styles/Button';
import { NavLink } from 'react-router-dom';
import Disclaimer from '../../shared/Disclaimer';
import OrcaLogo from '../../images/OrcaLogo';

class GeneralForm extends Component {
  state = { 
    firstName: '', 
    middleName: '', 
    lastName: '', 
    dateOfBirth: '', 
  }
  componentDidMount () {
    if (this.props.id) {
      const { firstName, middleName, lastName, dateOfBirth} = this.props
      this.setState({ firstName, middleName, lastName, dateOfBirth})
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(e.target)

  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState(
      { 
        firstName: '', 
        middleName: '', 
        lastName: '', 
        dateOfBirth: '', 
      }
    )
  }

  render() {
    const { firstName, middleName, lastName, dateOfBirth } = this.state

    const genderOptions = [
      { key: '0', text: 'Male', value: 'male'},
      { key: '1', text: 'Female', value: 'female'},
      { key: '2', text: 'Other or prefer not to say', value: 'other'},
    ]

    return (
    <Container>
      <NavLink to="/" >
        <OrcaLogo></OrcaLogo>
      </NavLink>
        <Grid centered >
          <Grid.Row >
            <Grid.Column width={12}>
            <Header as='h3' style={{marginTop: '1em'}}>
              General Information                                 
            </Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <Form.Input 
                  label="First Name" 
                  placeholder="First Name" 
                  name = "firstName"
                  value = {firstName}
                  onChange={this.handleInputChange}
                  required
                />
              </Form.Field>
              <Form.Field>
                <Form.Input 
                  label="Middle Name" 
                  placeholder="Middle Name" 
                  name = "middleName"
                  value = {middleName}
                  onChange={this.handleInputChange}
                />
              </Form.Field>
                <Form.Field>
                    <Form.Input 
                      label="Last Name" 
                      placeholder="Last Name"
                      name = "lastName"
                      value = {lastName}
                      onChange={this.handleInputChange}
                      required
                    />
                  </Form.Field>
                  <Form.Field>
                    <Form.Input 
                      label="Date of Birth" 
                      placeholder="yyyy-mm-dd"
                      name = "dateOfBirth"
                      value = {dateOfBirth}
                      type = "date"
                      onChange={this.handleInputChange}
                      required
                    />
                  </Form.Field>
                    <Form.Select
                      options={genderOptions}
                      label="Gender" 
                      placeholder="Gender"
                      name = "gender"
                      onChange={this.handleInputChange}
                      required
                    />
                    <SubmitButton  type="submit" >Submit</SubmitButton>
                </Form>
              </Grid.Column>
            </Grid.Row>
            <Disclaimer></Disclaimer>
            <div style={{ marginTop: '1em', paddingBottom: '1em'}}>
              <NavLink to="/contact-info" activeClassName="active" style={{fontSize: '1.25em', color: '#0058A2', float: 'left'}}>
                Continue
              </NavLink>
            </div>  
        </Grid>
    </Container>
      );
    }
  }
  
  export default GeneralForm;


