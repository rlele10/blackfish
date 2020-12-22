import React, { Component } from 'react';
import { Container, Grid, Form, Header} from 'semantic-ui-react';
import { SubmitButton } from '../../styles/Button';
import { NavLink } from 'react-router-dom';
import Disclaimer from '../../shared/Disclaimer';
import OrcaLogo from '../../images/OrcaLogo';
import SymptomCheckbox from './SymptomCheckbox';

class CovidInfoForm extends Component {
  state = { 
  }

  // componentDidMount () {
  //   if (this.props.id) {
  //     const { } = this.props
  //     this.setState({ })
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
    // const { } = this.state
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
              COVID-19 Information                                 
            </Header>
            <Form onSubmit={this.handleSubmit}>
                <Form.Select
                  options={booleanOptions}
                  label="Is this your first COVID-19 test?" 
                  placeholder="Is this your first COVID-19 test?"
                  name = "firstTest"
                  onChange={this.handleInputChange}
                  required
                />
                <Form.Select
                  options={booleanOptions}
                  label="Have you been in close contact with someone who tested positive for COVID-19 or was experiencing COVID-19 Symptoms in the last 2 weeks?" 
                  placeholder="Physical Contact?"
                  name = "physicalContact"
                  onChange={this.handleInputChange}
                  required
                />
                <Form.Select
                  options={booleanOptions}
                  label="Has a healthcare provider advised you to be tested for COVID-19?" 
                  placeholder="Has a healthcare provider advised you to be tested for COVID-19?"
                  name = "advisedForTesting"
                  onChange={this.handleInputChange}
                  required
                />
                <Form.Select
                  options={booleanOptions}
                  label="Are you exhibiting COVID-19 symptoms?" 
                  placeholder="Are you exhibiting COVID-19 symptoms?"
                  name = "symptoms"
                  onChange={this.handleInputChange}
                  required
                />
                <Form.Field>
                  <Form.Input 
                      label="Are you experiencing any following symptoms? (check all that apply)"                                                  
                      type = "hidden"
                    />
                  </Form.Field>
                  <SymptomCheckbox />
                  <SubmitButton  type="submit" >Submit</SubmitButton>
                </Form>
              </Grid.Column>
            </Grid.Row>
            <Disclaimer></Disclaimer>
            <div style={{ marginTop: '1em', paddingBottom: '1em'}}>
              <NavLink to="/demographic-info" activeClassName="active" style={{fontSize: '1.25em', color: '#0058A2', padding: '2em'}}>
                Back
              </NavLink>
              <NavLink to="/questionnaire-info" activeClassName="active" style={{fontSize: '1.25em', color: '#0058A2', padding: '2em'}}>
                Continue
              </NavLink>
            </div>  
        </Grid>
    </Container>

      );
    }
  }
  
  export default CovidInfoForm;


