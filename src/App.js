import PatientResultsForm from './components/patient/PatientResultsForm';
import PatientResultsShow from './components/patient/PatientResultsShow';
import ProviderResultsForm from './components/provider/ProviderResultsForm';
import ProviderResultsShow from './components/provider/ProviderResultsShow';
import PatientIntakeForm from './components/patient/PatientIntake';
import ProviderIntakeForm from './components/provider/ProviderIntake';
import ErrorPage from './components/health/ErrorPage';
import CovidTesting from './pages/CovidTesting';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const App = () => (
  <>
  <Router>
    <Route exact path="/error" component={ErrorPage} />
    <Route  exact path="/" component={CovidTesting} />
    <Route  exact path="/my-test-results" component={PatientResultsForm} />
    <Route  exact path="/patient-intake" component={PatientIntakeForm} />
    <Route  exact path="/provider-intake" component={ProviderIntakeForm} />
    <Route path="/view-result" component={PatientResultsShow} />
    <Route exact path="/provider-results" component={ProviderResultsForm} />
    <Route path="/view-patient-list" component={ProviderResultsShow} />
  </Router>
  </>
)

export default App;