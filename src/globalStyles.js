import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    --primary-blue: rgba(0, 80, 130, 0.79);
    --primary-dark: #343a40;
    --lignt-blue: #00a8cc;
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
