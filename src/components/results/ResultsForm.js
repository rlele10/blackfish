import React, { Component } from 'react';
import { Container, Grid, Form, Button} from 'semantic-ui-react';

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
                    <Form>
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
                              placeholder="dd/mm/yyyy"
                              type="date" 
                              required
                            />
                        </Form.Field>
                        <Button type="submit" color="blue">See Results</Button>
                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>

      );
    }
  }
  
  
  export default ResultsForm;


    // <
  // form onSubmit = {
  //   this.handleSubmit
  // } >
  // <
  // label htmlFor = "username" > Enter username < /label> <
  // input id = "username"
  // name = "username"
  // type = "text" / >

  // <
  // label htmlFor = "email" > Enter your email < /label> <
  // input id = "email"
  // name = "email"
  // type = "email" / >

  // <
  // label htmlFor = "birthdate" > Enter your birth date < /label> <
  // input id = "birthdate"
  // name = "birthdate"
  // type = "text" / >

  // <
  // button > Send data! < /button> < /
  // form >