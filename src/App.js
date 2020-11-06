import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

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
    fetch('https://api.airtable.com/v0/appKhP0lyazMGCfUR/results/rec00Ri5bwb7Xw8gc/?api_key=keyKIECB3GLzSZLdQ')
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

      <
      form onSubmit = {
        this.handleSubmit
      } >
      <
      label htmlFor = "username" > Enter username < /label> <
      input id = "username"
      name = "username"
      type = "text" / >

      <
      label htmlFor = "email" > Enter your email < /label> <
      input id = "email"
      name = "email"
      type = "email" / >

      <
      label htmlFor = "birthdate" > Enter your birth date < /label> <
      input id = "birthdate"
      name = "birthdate"
      type = "text" / >

      <
      button > Send data! < /button> < /
      form >
    );
  }
}


export default App;
