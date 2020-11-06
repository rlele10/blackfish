import ResultsForm from './components/results/ResultsForm';
import logo from '../src/components/images/OrcaLogo-Blue.png'

const App = () => (
  <>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: '10em'}} > 
      <img src={logo} />
    </div>
    <ResultsForm></ResultsForm>
  </>
)

export default App;
  
