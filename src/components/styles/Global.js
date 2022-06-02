import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: 'Epilogue', sans-serif;
    font-weight: 700;
  
}

img {
  max-width: 100%;
} 


body {
    font-family: 'Epilogue', sans-serif;
    font-weight: 500;
    background: var(--almost-white);  
 }
 
 p {
   line-height: 1.5;
   color: var(--almost-black);
  }

  .container {
  max-width: 100%;
  padding: 0 10px 10px 10px;
  margin: 10px;
}
  a {
  text-decoration: none;
  color:var(--almost-black);
 
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
 
  @media (min-width: ${({ theme }) => theme.tablet}) {
    font-size: 1.25em;
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    font-size: 1.5em;
  }
  
  
  
  @media (min-width: ${({ theme }) => theme.tablet}) {
    padding: 0 10px 0 10px;
    .bottom {
      display: flex;
      flex-direction: row;
      align-items: start;
      justify-content: space-between;
    }
  }

  
`;

export default GlobalStyles;
