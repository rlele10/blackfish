// This can be deleted once individual forms are working //


import React, { Component } from 'react';
import { Container, Grid, Form} from 'semantic-ui-react';
import { SubmitButton } from '../../styles/Button';
import { NavLink } from 'react-router-dom';
import Disclaimer from '../../shared/Disclaimer';
import OrcaLogo from '../../images/OrcaLogo';
import HealthConditionCheckbox from './HealthConditionCheckbox';
import SymptomCheckbox from './SymptomCheckbox';

class PatientIntakeForm extends Component {
  state = { 
    firstName: '', 
    middleName: '', 
    lastName: '', 
    dateOfBirth: '', 
    phoneNum: '', 
    email: '', 
    streetAddress: '',  
    city: '',
    zipCode: '',
    county: '',
    ssn: '',
    photoIDFront: '',
    photIDBack: '',
    checkedItems: new Map(),
  }
  componentDidMount () {
    if (this.props.id) {
      const { firstName, middleName, lastName, dateOfBirth, phoneNum, email, streetAddress, city, zipCode, county, ssn, photoIDFront, photoIDBack } = this.props
      this.setState({ firstName, middleName, lastName, dateOfBirth, phoneNum, email, streetAddress, city, zipCode, county, ssn, photoIDFront, photoIDBack })
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
        firstName: '', 
        middleName: '', 
        lastName: '', 
        dateOfBirth: '', 
        phoneNum: '', 
        email: '', 
        streetAddress: '', 
        city: '',
        state: '',
        zipCode: '',
        county: '',
        ssn: '',
        photoIDFront: '',
        photoIDBack: '',
      }
    )
  }

  render() {
    const { firstName, middleName, lastName, dateOfBirth, phoneNum, email, streetAddress, city, state, zipCode, county, ssn, photoIDFront, photoIDBack } = this.state

    const genderOptions = [
      { key: '0', text: 'Male', value: 'male'},
      { key: '1', text: 'Female', value: 'female'},
      { key: '2', text: 'Other or prefer not to say', value: 'other'},
    ]

    const booleanOptions = [
      { key: '0', text: 'Yes', value: 'yes'},
      { key: '1', text: 'No', value: 'no'},
    ]

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

    const insuranceOptions = [
      { key: '0', text: 'Y - I have health insurance that will be billed for this test', value: 'yes'},
      { key: '1', text: 'N - I do not have health insurance', value: 'no'},
      { key: '2', text: 'Opt Out - Do not bill my insurance I will pay', value: 'opt_out'},
    ]

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
                                label="Select your gender" 
                                placeholder="Gender"
                                name = "gender"
                                onChange={this.handleInputChange}
                                required
                              />

                              <Form.Select
                                options={booleanOptions}
                                label="Are you pregnant?" 
                                placeholder="Pregnant?"
                                name = "pregnant"
                                onChange={this.handleInputChange}
                                required
                              />

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
                              <Form.Input 
                                label="Street Address (current residence)" 
                                placeholder="Street Address"
                                name = "streetAddress"
                                value = {streetAddress}
                                onChange={this.handleInputChange}
                                required
                              />
                          </Form.Field>

                          <Form.Field>
                              <Form.Input 
                                label="City (current residence)" 
                                placeholder="City"
                                name = "city"
                                value = {city}
                                onChange={this.handleInputChange}
                                required
                              />
                          </Form.Field>

                          <Form.Field>
                              <Form.Input 
                                label="State (current residence)" 
                                placeholder="State"
                                name = "state"
                                value = {state}
                                onChange={this.handleInputChange}
                                required
                              />
                          </Form.Field>

                          <Form.Field>
                              <Form.Input 
                                label="Zip Code (current residence)" 
                                placeholder="Zip Code"
                                name = "zipCode"
                                value = {zipCode}
                                onChange={this.handleInputChange}
                                required
                              />
                          </Form.Field>

                          <Form.Field>
                              <Form.Input 
                                label="County(eg. Utah County, Salt Lake County)" 
                                placeholder="County"
                                name = "county"
                                value = {county}
                                onChange={this.handleInputChange}
                                required
                              />
                          </Form.Field>

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

                        <Form.Select
                            options={insuranceOptions}
                            label="Do you have health insurance to be billed?" 
                            placeholder="Do you have health insurance to be billed?"
                            name = "insurance"
                            onChange={this.handleInputChange}
                            required
                          />

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
                            label="Are you employed in healthcare?" 
                            placeholder="Are you employed in healthcare?"
                            name = "healthcare"
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

                          <Form.Field>
                          <Form.Input 
                              label="Are you experiencing any following symptoms? (check all that apply)"                                                  
                              type = "hidden"
                            />
                          </Form.Field>

                          <SymptomCheckbox />

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
                            options={insuranceOptions}
                            label="Do you have health insurance to be billed?" 
                            placeholder="Health insurance options"
                            name = "insurance"
                            onChange={this.handleInputChange}
                            required
                          />

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
  
  export default PatientIntakeForm;

//   <Form.Group>
//   <label>Are you experiencing any following symptoms? (check all that apply)</label>
//   <br/>&nbsp;
//     <ul>
//       {this.state.healthConditionOptions.list.map(item => (
//         <li key={item} > {item}  </li>
//       ))}
//     </ul>
// </Form.Group>

// <Form.Group>
//   <label>Are you experiencing any following symptoms? (check all that apply)</label>
//   <Form.Checkbox 
//     name='radioButton'
//     label='None'
//     value='none'
//     checked={value === 'none'}
//     onChange={this.handleRadioChange}
//   />
// </Form.Group>


