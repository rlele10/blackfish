import React, { Component } from 'react';
import { Container, Grid, Form} from 'semantic-ui-react';
import styled from 'styled-components'


class ResultsForm extends Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data1 = new FormData(event.target);
    console.log(data1.get('username'))
    let url = 'https://api.airtable.com/v0/appKhP0lyazMGCfUR/results/' + data1.get('username') + '/?api_key=keyKIECB3GLzSZLdQ'

    fetch(url)
      .then((resp) => resp.json())
      .then(data => {
        console.log(data.records)
        console.log(data.records.filter(x => x.id == 'rec00SThSFCscRobA'))
      }).catch(err => {
        // Error :(
      });
  }

  componentDidMount() {
    fetch('https://api.airtable.com/v0/appKhP0lyazMGCfUR/results/?api_key=keyKIECB3GLzSZLdQ')
      .then((resp) => resp.json())
      .then(data => {
        console.log(data.records)
        console.log(data.records.filter(x => x.id == 'rec00SThSFCscRobA'))
      }).catch(err => {
        // Error :(
      });
  }
  render() {
    return (

    <Container>
        <Grid centered >
            <Grid.Row >
                <Grid.Column width={12}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <Form.Input 
                              label="Sample ID" 
                              placeholder="FR# or SD#" 
                              required
                            />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input 
                              label="Date of Birth" 
                              type="date" 
                              required
                            />
                        </Form.Field>
                        <br></br>
                        <SubmitButton >View Results</SubmitButton>
                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>

      );
    }
  }
  
  
  export default ResultsForm;


  const SubmitButton = styled.button`
    color: white;
    background-color: #0058A2;
    border-radius: 4px;
    border: 2.5px solid black;
    padding: .25em;

    @media (min-width: 320px) and (max-width: 480px) {
      width: 8em;
      height: auto;
      font-size: .9em;
    }

    @media (min-width: 481px) and (max-width: 767px) {
      width: 12em;
      height: auto;
      font-size: 1em;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      width: 12em;
      height: auto;
      font-size: 1.25em;
    }

    @media (min-width: 1025px) and (max-width: 1280px) {
      width: 14em;
      height: auto;
      font-size: 1.25em;
    }

    @media (min-width: 1281px) {
      width: 14em;
      height: auto;
      font-size: 1.5em;
    }

    
    &:hover {
      background-color: white;
      color: #0058A2
    }

  `;