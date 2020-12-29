import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 62.5%;  
    font-family: 'Roboto', sans-serif;
    
    transition: background 1s, color 1s, border 1s;
    background: ${({theme}) => theme.colors.background};
  }  
`
export default GlobalStyle