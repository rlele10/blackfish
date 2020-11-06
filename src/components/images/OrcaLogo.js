import logo from '../images/orca-biotech-logo.png';
import styled from 'styled-components'


const OrcaLogo = () => (
  <ImageContainer>
    <img src={logo} alt="orca biotech logo" />
  </ImageContainer>
)

export default OrcaLogo;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5em;
`;