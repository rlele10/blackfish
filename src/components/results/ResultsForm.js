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
                <Grid.Column width={6}>
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
                        <SubmitButton >See Results</SubmitButton>
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
    border-radius: 8px;
    width: 10em;
    height: auto;
    
    &:hover {
      background-color: white;
      color: #0058A2
    }

  `;