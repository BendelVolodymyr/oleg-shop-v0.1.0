import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

#root {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
}

p, h1, h2, h3, h4, h5, h6 {
  margin: 0;
  font-family: 'Playfair Display', sans-serif;
}

`;
