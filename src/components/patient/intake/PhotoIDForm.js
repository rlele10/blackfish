import React, { Component } from 'react';
import { Container, Grid, Form, Header} from 'semantic-ui-react';
import { SubmitButton } from '../../styles/Button';
import { NavLink } from 'react-router-dom';
import Disclaimer from '../../shared/Disclaimer';
import OrcaLogo from '../../images/OrcaLogo';

class PhotoIDForm extends Component {
  state = { 
    photoIDFront: '',
    photIDBack: '',
  }
  componentDidMount () {
    if (this.props.id) {
      const { photoIDFront, photoIDBack } = this.props
      this.setState({ photoIDFront, photoIDBack })
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
        photoIDFront: '',
        photoIDBack: '',
      }
    )
  }

  render() {
    const { photoIDFront, photoIDBack } = this.state

    return (
    <Container>
      <OrcaLogo></OrcaLogo>
        <Grid centered >
          <Grid.Row >
            <Grid.Column width={12}>
            <Header as='h3' style={{marginTop: '1em'}}>
              Photo ID Image Upload                                 
            </Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <Form.Input 
                    label="Drivers License or Photo ID Front Image " 
                    placeholder="Drivers License or Photo ID Front Image "
                    name = "photoIDFront"
                    value = {photoIDFront}
                    type = "file"
                    onChange={this.handleInputChange}
                    required
                  />
                </Form.Field>
                  <Form.Field>
                    <Form.Input 
                        label="Drivers License or Photo ID Back Image " 
                        placeholder="Drivers License or Photo ID Back Image "
                        name = "photoIDBack"
                        value = {photoIDBack}
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
              <NavLink to="/questionnaire-info" activeClassName="active" style={{fontSize: '1.25em', color: '#0058A2', padding: '2em'}}>
                 Back
              </NavLink>
              <NavLink to="/insurance-info" activeClassName="active" style={{fontSize: '1.25em', color: '#0058A2', padding: '2em'}}>
                Continue
              </NavLink>
          </div>  
      </Grid>
    </Container>
      );
    }
  }
  
  export default PhotoIDForm;


