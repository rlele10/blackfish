import ResultsForm from './components/results/ResultsForm';
import ResultsShow from './components/results/ResultShow';
import OrcaLogo from './components/images/OrcaLogo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => (
  // <BrowserRouter>
  //   <OrcaLogo></OrcaLogo>
  //   <ResultsForm></ResultsForm>
  // </BrowserRouter>
  <Router>
    <OrcaLogo></OrcaLogo>
    <Route exact path="/" component={ResultsForm} />
    <Route path="/test-result" component={ResultsShow} />
  </Router>
)

export default App;
  
