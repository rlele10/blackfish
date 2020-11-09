import logo from '../images/orca-biotech-logo.png';
import { LogoContainer, LogoSize } from '../styles/Logo'

const OrcaLogo = () => (
  <LogoContainer>
    <LogoSize src={logo} alt="orca biotech logo"/>
  </LogoContainer>
)

export default OrcaLogo;