import logo from '../images/orca-biotech-logo.png';
import styled from 'styled-components'


const OrcaLogo = () => (
  <ImageContainer>
    <ImageSize src={logo} alt="orca biotech logo"/>
  </ImageContainer>
)

export default OrcaLogo;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 4em;
`;

const ImageSize = styled.img`
  width: 100%;
  max-width: 45em;
  height: auto;
`;