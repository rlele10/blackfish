import logo from '../images/orca-health-logo.png';
import { LogoContainer, LogoSize } from '../styles/Logo'

const OrcaHealthLogo = () => (
  <LogoContainer>
    <LogoSize src={logo} alt="orca health logo"/>
  </LogoContainer>
)

export default OrcaHealthLogo;