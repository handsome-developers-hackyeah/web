import { createGlobalStyle } from 'styled-components';

import Retro from './assets/fonts/Retro.ttf';
import AfterGlow from './assets/fonts/Afterglow-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Retro';
    src: url(${Retro});
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'AfterGlow';
    src: url(${AfterGlow});
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${(props) => props.theme.gray};
  }
  
  h1 {
    font-family: 'AfterGlow';
  }

  p, li, a, button {
    font-family: 'Inter';
  }

`;

export default GlobalStyle;
