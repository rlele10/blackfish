import React, { Component } from 'react';
import { Container, Grid, Form} from 'semantic-ui-react';
import { SubmitButton } from '../../styles/Button';
import { NavLink } from 'react-router-dom';
import Disclaimer from '../../shared/Disclaimer';
import OrcaLogo from '../../images/OrcaLogo';

class SSNInfoForm extends Component {
  state = { 
    ssn: '',
  }
  componentDidMount () {
    if (this.props.id) {
      const { ssn } = this.props
      this.setState({ ssn })
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
        ssn: ''
      }
    )
  }

  render() {
    const { ssn} = this.state

    return (
    <Container>
        <NavLink to="/" >
          <OrcaLogo></OrcaLogo>
        </NavLink>
          <Grid centered >
              <Grid.Row >
                  <Grid.Column width={12}>

                      <Form onSubmit={this.handleSubmit}>

                        <Form.Field>
                          <Form.Input 
                              label="Social Security Number" 
                              placeholder="Social Security Number"
                              name = "ssn"
                              value = {ssn}
                              type = "password"
                              onChange={this.handleInputChange}
                              required
                            />
                        </Form.Field>

                          <SubmitButton  type="submit" >Submit</SubmitButton>

                      </Form>
                  </Grid.Column>
              </Grid.Row>
              <Disclaimer></Disclaimer>
          </Grid>
    </Container>

      );
    }
  }
  
  export default SSNInfoForm;


