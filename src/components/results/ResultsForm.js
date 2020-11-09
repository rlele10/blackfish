import React, { PureComponent } from 'react';
import { Container, Grid, Form} from 'semantic-ui-react';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';
import { ResultShow } from './ResultShow'
import { withRouter } from 'react-router-dom';

class ResultsForm extends PureComponent {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {

    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data.get('sample_id'))
    console.log(data.get('test_id'))
    console.log(data.get('birth_day'))
    let url = 'https://api.airtable.com/v0/appKhP0lyazMGCfUR/Results/'+data.get('test_id')+'/?api_key=keyKIECB3GLzSZLdQ'
    fetch(url)
      .then((resp) => resp.json())
      .then(data => {
        if(data.error)
         {
          console.log("Sorry no test result found")
         }
         else{
           console.log(data)
           const { history } = this.props;
   if(history) history.push({ 
    pathname: '/test-result',
    state : data.fields
   });
           
         }
       // console.log(data.records.filter( x=> x.fields.Sample_ID == data.get('sample_id') ))
      }).catch(err => {
       
        // Error :(
      });
  }

  componentDidMount() {
    fetch('https://api.airtable.com/v0/appKhP0lyazMGCfUR/Results/rec00SThSFCscRobA/?api_key=keyKIECB3GLzSZLdQ')
      .then((resp) => resp.json())
      .then(data => {
        console.log(data)
      
      }).catch(err => {
        // Error :(
      });
  }

  render() {
    const { history } = this.props;
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
                              name = "sample_id"
                              required
                            />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input 
                              label="Access Code" 
                              placeholder="Access Code" 
                              name = "test_id"
                              required
                            />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input 
                              label="Date of Birth" 
                              type="date" 
                              name = "birth_day"
                              required
                            />
                        </Form.Field>
                        <SubmitButton  type="submit" >See Results</SubmitButton>
                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>

      );
    }
  }
  
  
  export default withRouter(ResultsForm);


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