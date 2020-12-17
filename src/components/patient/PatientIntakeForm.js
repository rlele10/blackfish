import React, { Component } from 'react';
import { Container, Grid, Form} from 'semantic-ui-react';
import { SubmitButton } from '../styles/Button';
import { NavLink } from 'react-router-dom';
import Disclaimer from '../shared/Disclaimer';
import OrcaLogo from '../images/OrcaLogo';
import OrcaCheckBox from './Checkbox';
import axios from "axios";

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
    driversLicenseFront: '',
    driversLicenseBack: '',
    checkedItems: new Map(),
  }
  componentDidMount () {
    const data = {
      "records": [
        {
          "fields": {
            "First Name": "DeleteMe",
            "Middle Name": "Edward",
            "Last Name": "Pope",
            "Date of Birth": "1972-09-11",
            "Gender": "Male",
            "Are you pregnant?": "N",
            "Phone Number": "3855394970",
            "Email Address": "mark_pope@byu.edu",
            "Street Address": "1378 East Lancaster Way",
            "City": "Orem",
            "State": "UT",
            "Zip Code": "84097",
            "County": "Utah",
            "Your Race": "White",
            "Your Ethnicity": "Not of Hispanic, Latino or Spanish Origin",
            "Insurance Company": "DMBA",
            "Member ID or Policy Number": "001693249",
            "Insurance Company Street Address": "PO Box 45530",
            "Insurance Company City": "Salt Lake City",
            "Insurance Company State": "UT",
            "Insurance Company Zip": "84130-0783",
            "Is this your first COVID-19 test?": "Y",
            "Are you employed in healthcare?": "N",
            "Are you exhibiting COVID-19 symptoms?": "N",
            "Are you currently hospitalized?": "N",
            "Are you currently in the ICU?": "N",
            "Are you a resident in a care center?": "N",
            "Disclaimer": "I Accept",
            "Provider": "xxxxx",
            "Tests_Info": [ ]
          }
        }
      ]
    }
    let url = "https://api.airtable.com/v0/appKhP0lyazMGCfUR/Intakes" 
    let axiosConfig = { headers: { Authorization: "Bearer " + 'keyKIECB3GLzSZLdQ' , 'Content-Type': 'application/json' } }
    console.log(data)
    console.log("sasdsdsdsdssd")
    axios
      .post(
        url,
        data,
        axiosConfig
      )
      .then(resp => console.log(resp))
      .catch(error => console.log(error))
    if (this.props.id) {
      const { firstName, middleName, lastName, dateOfBirth, phoneNum, email, streetAddress, city, zipCode, county, ssn, driversLicenseFront, driversLicenseBack } = this.props
      this.setState({ firstName, middleName, lastName, dateOfBirth, phoneNum, email, streetAddress, city, zipCode, county, ssn, driversLicenseFront, driversLicenseBack })
  
  }
  }
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleCheckboxChange(e) {
    const item =e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
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
        zipCode: '',
        county: '',
        ssn: '',
        driversLicenseFront: '',
        driversLicenseBack: '',
      }
    )
  }

  render() {
    const { firstName, middleName, lastName, dateOfBirth, phoneNum, email, streetAddress, city, zipCode, county, ssn, driversLicenseFront, driversLicenseBack } = this.state

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
      { key: '2', text: 'Opt Out - Do not bill my insurance I will pay cash', value: 'opt_out'},
    ]

    const healthConditionCheckboxes = [
      { key: '0', name: 'None', label: "none"},
      { key: '1', name: 'Liver Disease', label: 'liver_disease'},
      { key: '2', name: 'Current cancer treatment', label: 'current_cancer_treatment'},
      { key: '3', name: 'Deficiencies of the immune system or HIV', label: 'immune_system_HIV'},
      { key: '4', name: 'Diabetes', label: 'diabetes'},
      { key: '5', name: 'Kidney Disease requiring dialysis', label: 'kidney_disease'},
      { key: '6', name: 'Moderate to severe Asthma', label: 'asthma'},
      { key: '7', name: 'Obesity', label: 'obesity'},
      { key: '8', name: 'Organ or bone marrow transplant', label: 'transplant'},
      { key: '9', name: 'Serious heart conditions', label: 'heart_conditions'},
      { key: '10', name: 'Sickle cell, thalassemia, or other hemoglobin disease', label: 'hemoglobin_disease'},
      { key: '11', name: 'Taking medications that weaken the immune system (such as steroids)', label: 'medications'},
    ]

    const Checkbox = ({ type = 'checkbox', name, checked = false, handleCheckboxChange }) => (
      <input type={type} name={name} checked={checked} onChange={handleCheckboxChange} />
    );

    const symptomOptions = [
      { key: '0', text: 'None', value: 'none'},
      { key: '1', text: 'Fever or Chills', value: 'fever_chills'},
      { key: '2', text: 'Cough', value: 'cough'},
      { key: '3', text: 'Shortness of breath or difficulty breathing', value: 'breathing'},
      { key: '4', text: 'Fatigue', value: 'fatigue'},
      { key: '5', text: 'Muscle or body aches', value: 'aches'},
      { key: '6', text: 'Headache', value: 'headache'},
      { key: '7', text: 'New loss of taste or smell', value: 'taste_smell'},
      { key: '8', text: 'Sore throat', value: 'sore_throat'},
      { key: '9', text: 'Congestion or runny nose', value: 'congestion_runny_nose'},
      { key: '10', text: 'Nausea or vomiting', value: 'nausea_vomiting'},
      { key: '11', text: 'Diarrhea', value: 'diarrhea'},
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
                                value = {genderOptions}
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
                              name = "driversLicenseFront"
                              value = {driversLicenseFront}
                              type = "file"
                              onChange={this.handleInputChange}
                              required
                            />
                        </Form.Field>

                        <Form.Field>
                          <Form.Input 
                              label="Drivers License or Photo ID Back Image " 
                              placeholder="Drivers License or Photo ID Back Image "
                              name = "driversLicenseBack"
                              value = {driversLicenseBack}
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
                          <OrcaCheckBox />

                          <Form.Select
                            options={symptomOptions}
                            label="Are you experiencing any following symptoms? (check all that apply)" 
                            placeholder="Are you experiencing any following symptoms? (check all that apply)"
                            name = "symptoms"
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


