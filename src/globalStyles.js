import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%
  }
  body {
    font-family: 'Poppins', sans-serif;
    background-color: #f0f0f0;
  }
`;

export default GlobalStyle;
