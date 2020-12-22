import React, { Component } from 'react';
import { Container, Grid, Form, Header} from 'semantic-ui-react';
import { SubmitButton } from '../../styles/Button';
import { NavLink } from 'react-router-dom';
import Disclaimer from '../../shared/Disclaimer';
import OrcaLogo from '../../images/OrcaLogo';
import HealthConditionCheckbox from './HealthConditionCheckbox';

class QuestionnaireForm extends Component {
  state = { 
  }

  // componentDidMount () {
  //   if (this.props.id) {
  //     const { } = this.props
  //     this.setState({})
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
    // const {  } = this.state

    const booleanOptions = [
      { key: '0', text: 'Yes', value: 'yes'},
      { key: '1', text: 'No', value: 'no'},
    ]

    return (
    <Container>
      <OrcaLogo></OrcaLogo>
        <Grid centered >
          <Grid.Row >
            <Grid.Column width={12}>
            <Header as='h3' style={{marginTop: '1em'}}>
                General Questionnaire                                 
              </Header>
              <Form onSubmit={this.handleSubmit}>
                <Form.Select
                  options={booleanOptions}
                  label="Are you pregnant?" 
                  placeholder="Pregnant?"
                  name = "pregnant"
                  onChange={this.handleInputChange}
                  required
                />
                <Form.Select
                  options={booleanOptions}
                  label="Are you employed in healthcare?" 
                  placeholder="Are you employed in healthcare?"
                  name = "healthcare"
                  onChange={this.handleInputChange}
                  required
                />
                <Form.Select
                  options={booleanOptions}
                  label="Are you currently hospitalized?" 
                  placeholder="Are you currently hospitalized?"
                  name = "hospitalized"
                  onChange={this.handleInputChange}
                  required
                />
                <Form.Select
                  options={booleanOptions}
                  label="Are you currently in the ICU?" 
                  placeholder="Are you currently in the ICU?"
                  name = "icu"
                  onChange={this.handleInputChange}
                  required
                />
                <Form.Select
                  options={booleanOptions}
                  label="Are you a resident in a care center?" 
                  placeholder="Are you a resident in a care center?"
                  name = "careCenter"
                  onChange={this.handleInputChange}
                  required
                />
                <Form.Field>
                  <Form.Input 
                      label="Do you have any of the following health condition?"                                                  
                      type = "hidden"
                    />
                  </Form.Field>
                  <HealthConditionCheckbox />
                  <SubmitButton  type="submit" >Submit</SubmitButton>
                </Form>
              </Grid.Column>
            </Grid.Row>
            <Disclaimer></Disclaimer>
            <div style={{ marginTop: '1em', paddingBottom: '1em'}}>
              <NavLink to="/covid-info" activeClassName="active" style={{fontSize: '1.25em', color: '#0058A2', padding: '2em'}}>
                Back
              </NavLink>
              <NavLink to="/photo-id-info" activeClassName="active" style={{fontSize: '1.25em', color: '#0058A2', padding: '2em'}}>
                Continue
              </NavLink>
          </div>  
      </Grid>
    </Container>
      );
    }
  }
  
  export default QuestionnaireForm;


