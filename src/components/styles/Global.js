import { createGlobalStyle } from "styled-components";

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
body {
    font-family: 'Epilogue', sans-serif;
    font-weight: 500;
    background: var(--almost-white);
    transition: 1s ease-in-out;
 }
 p {
   line-height: 1.5;
   font-size: 18px;
   color: var(--almost-black);
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    font-size: 1.25em;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    font-size: 1.25em;
  }

  .container {
    max-width: 100%;
  padding: 0 10px 10px 10px;
  margin: 10px;
  
  @media (min-width: ${({ theme }) => theme.tablet}) {
    padding: 0 10px 0 10px;
    .bottom {
      display: flex;
      flex-direction: row;
      align-items: start;
      justify-content: space-between;
    }
  }
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
`;

export default GlobalStyles;