import ResultsForm from './components/results/ResultsForm';
import ResultsShow from './components/results/ResultShow';
import OrcaLogo from './components/images/OrcaLogo';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const App = () => (
  <>
  <Router>
    <OrcaLogo></OrcaLogo>
    <Route  exact path="/" component={ResultsForm} />
    <Route  exact path="/my-test-results" component={ResultsForm} />
    <Route path="/view-result" component={ResultsShow} />
  </Router>
  </>
)

export default App;