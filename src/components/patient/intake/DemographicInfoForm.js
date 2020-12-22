import React, { Component } from 'react';
import { Container, Grid, Form, Header} from 'semantic-ui-react';
import { SubmitButton } from '../../styles/Button';
import { NavLink } from 'react-router-dom';
import Disclaimer from '../../shared/Disclaimer';
import OrcaLogo from '../../images/OrcaLogo';

class DemographicForm extends Component {
  state = { 
  }
  // componentDidMount () {
  //   if (this.props.id) {
  //     const { } = this.props
  //     this.setState({  })
  //   }
  // }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState(
      { 
      }
    )
  }

  render() {

    const raceOptions = [
      { key: '0', text: 'White', value: 'white'},
      { key: '1', text: 'Black or African American', value: 'black_african_american'},
      { key: '2', text: 'American Indian or Alaskan Native', value: 'american_indian_alaska_native'},
      { key: '3', text: 'Asian Indian', value: 'asian_indian'},
      { key: '4', text: 'Chinese', value: 'chinese'},
      { key: '5', text: 'Filipino', value: 'filipino'},
      { key: '6', text: 'Japanese', value: 'japanese'},
      { key: '7', text: 'Korean', value: 'korean'},
      { key: '8', text: 'Vietnamese', value: 'vietnamese'},
      { key: '9', text: 'Other Asian', value: 'other_asian'},
      { key: '10', text: 'Native Hawaiian', value: 'native_hawaiian'},
      { key: '11', text: 'Guamanian or Chamorro', value: 'guamanian_chamorro'},
      { key: '12', text: 'Samoan', value: 'samoan'},
      { key: '13', text: 'Other Pacific Islander', value: 'other_pacific_islander'},
    ]

    const ethnicityOptions = [
      { key: '0', text: 'Not of Hispanic, Latino or Spanish Origin', value: 'not_hispanic_latino_spanish_origin'},
      { key: '1', text: 'Hispanic, Latino or Spanish Origin', value: 'no'},
    ]

    return (
    <Container>
      <OrcaLogo></OrcaLogo>
        <Grid centered >
          <Grid.Row >
            <Grid.Column width={12}>
            <Header as='h3' style={{marginTop: '1em'}}>
              Demographics                                 
            </Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Select
                options={raceOptions}
                label="Select Your Race" 
                placeholder="Race"
                name = "race"
                onChange={this.handleInputChange}
                required
              />
              <Form.Select
                options={ethnicityOptions}
                label="Select Your Ethnicity" 
                placeholder="Ethnicity"
                name = "ethnicity"
                onChange={this.handleInputChange}
                required
              />
              <SubmitButton  type="submit" >Submit</SubmitButton>
            </Form>
          </Grid.Column>
        </Grid.Row>
        <Disclaimer></Disclaimer>
        <div style={{ marginTop: '1em', paddingBottom: '1em'}}>
          <NavLink to="/contact-info" activeClassName="active" style={{fontSize: '1.25em', color: '#0058A2', padding: '2em'}}>
            Back
          </NavLink>
          <NavLink to="/covid-info" activeClassName="active" style={{fontSize: '1.25em', color: '#0058A2', padding: '2em'}}>
            Continue
          </NavLink>
        </div>  
      </Grid>
    </Container>
      );
    }
  }
  
  export default DemographicForm;


