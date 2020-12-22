import PatientResultsForm from './components/patient/PatientResultsForm';
import PatientResultsShow from './components/patient/PatientResultsShow';
import ProviderResultsForm from './components/provider/ProviderResultsForm';
import ProviderResultsShow from './components/provider/ProviderResultsShow';
import PatientIntake from './components/patient/intake/RenderForms'
import ProviderIntakeForm from './components/provider/ProviderIntake';
import GeneralInfoForm from './components/patient/intake/GeneralInfoForm';
import ContactInfoForm from './components/patient/intake/ContactInfoForm'
import DemographicInfoForm from './components/patient/intake/DemographicInfoForm';
import CovidInfoForm from './components/patient/intake/CovidInfoForm';
import QuestionnaireForm from './components/patient/intake/QuestionnaireForm';
import PhotoIDForm from './components/patient/intake/PhotoIDForm';
import InsuranceQuestion from './components/patient/intake/InsuranceQuestion';
import DocIntakeForm from './components/provider/Doc/DocIntake';
import ErrorPage from './components/health/ErrorPage';
import CovidTesting from './pages/CovidTesting';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const App = () => (
  <>
  <Router>
    <Route exact path="/error" component={ErrorPage} />
    <Route  exact path="/" component={CovidTesting} />
    <Route  exact path="/my-test-results" component={PatientResultsForm} />
    <Route  exact path="/patient-intake" component={PatientIntake} />
    <Route  exact path="/general-info" component={GeneralInfoForm} />
    <Route  exact path="/contact-info" component={ContactInfoForm} />
    <Route  exact path="/demographic-info" component={DemographicInfoForm} />
    <Route  exact path="/covid-info" component={CovidInfoForm} />
    <Route  exact path="/questionnaire-info" component={QuestionnaireForm} />
    <Route  exact path="/photo-id-info" component={PhotoIDForm} />
    <Route  exact path="/insurance-info" component={InsuranceQuestion} />
    <Route  exact path="/provider-intake" component={ProviderIntakeForm} />
    <Route  exact path="/doc-intake" component={DocIntakeForm} />
    <Route path="/view-result" component={PatientResultsShow} />
    <Route exact path="/provider-results" component={ProviderResultsForm} />
    <Route path="/view-patient-list" component={ProviderResultsShow} />
  </Router>
  </>
)

export default App;