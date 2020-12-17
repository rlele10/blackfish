import styled from 'styled-components'

export const SubmitButton = styled.button`
  color: white;
  background-color: #0058A2;
  border-radius: 4px;
  border: 2.5px solid black;
  padding: .25em;
  margin-top: 1em;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 8em;
    height: auto;
    font-size: 1.25em;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 12em;
    height: auto;
    font-size: 1.4em;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 12em;
    height: auto;
    font-size: 1.5em;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 14em;
    height: auto;
    font-size: 1.6em;
  }

  @media (min-width: 1281px) {
    width: 14em;
    height: auto;
    font-size: 1.6em;
  }


  &:hover {
    background-color: white;
    color: #0058A2
  }

`;