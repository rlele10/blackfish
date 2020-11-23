import PatientResultsForm from './components/patient/PatientResultsForm';
import PatientResultsShow from './components/patient/PatientResultsShow';
import ProviderResultsForm from './components/provider/ProviderResultsForm';
import ProviderResultsShow from './components/provider/ProviderResultsShow';
import OrcaLogo from './components/images/OrcaLogo';
import { BrowserRouter as Router, Route } from 'react-router-dom';


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

export default App;