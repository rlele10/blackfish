import PatientResultsForm from './components/patient/PatientResultsForm';
import PatientResultsShow from './components/patient/PatientResultsShow';
import ProviderResultsForm from './components/provider/ProviderResultsForm';
import ProviderResultsShow from './components/provider/ProviderResultsShow';
import OrcaLogo from './components/images/OrcaLogo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Airtable from 'airtable';
import React, { PureComponent, useEffect } from 'react';
import {useRecordById, useRecordIds, useBase} from '@airtable/blocks/ui';

const App = () => (
  <>
  <Router>
    <OrcaLogo></OrcaLogo>
    <Route  exact path="/" component={PatientResultsForm} />
    <Route  exact path="/my-test-results" component={PatientResultsForm} />
    <Route path="/view-result" component={PatientResultsShow} />
    <Route exact path="/provider-results" component={ProviderResultsForm} />
    <Route path="/view-patient-list" component={ProviderResultsShow} />

  </Router>
  </>
)


// function App(){
//   const base = new Airtable({apiKey: "keyKIECB3GLzSZLdQ"}).base('appKhP0lyazMGCfUR')
  
//   useEffect(() => {
//     base("Providers")
//     .select({view: "All"})
//     .eachPage((records, fetchNextPage) => {
//       console.log(records)
//       console.log((records[0].fields.Tests))
//       console.log(records[0].fields.Tests[0]);
//     //  const tt= records[0].fields.Tests[0]
//       fetchNextPage();
//     }, 10000)
//   })
  
 
//   // const queryResult = myTable.selectRecords();


//   //const record = useRecordById("Providers", "recMOLa3G8hsce2Pa");

//   function RecordListItem() {
   
//  //   const record = useRecordById("Providers", "recMOLa3G8hsce2Pa");
//    //console.log(record)
//    return <li>dsdsd</li>;
  
// }


//   return <div>ssss</div>
// }

export default App;