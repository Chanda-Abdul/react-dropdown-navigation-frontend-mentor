import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`


font-family: 'Epilogue', sans-serif;

@keyframes transitionIn {
  from {
  opacity: 0;
  transform: rotateX(-10deg);
  } 

  to {
    opacity: 1;
    transform: rotateX(0);
  }
}

@keyframes dropdown {
  from {
  opacity: 0;
  transform: translateY(-20px), translateX(-20px);
  } 

  to {
    opacity: 1;
    transform: translateY(0), translateX(0);
  }
}
.container {

  max-width: 100vw;
  padding: 0 10px 10px 10px;
  margin: 10px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  color: var(--almost-black);
  font-size: 36px;
  line-height: 42px;
  letter-spacing: -0.5px;
  text-align: center;
}

body {
    font-weight: 400;
    background: var(--almost-white);  
    font-size: 14px;
    line-height: 16px;
    text-align: left;
    color: var(--medium-gray);
 }
 
 p {
   line-height: 1.5;
   color: var(--almost-black);
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

button {
  height: 48px;
  border-radius: 15px;
  margin: 20px auto 30px auto;
  padding: 15px 25px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.2px;
  text-align: center;
  cursor: pointer;

  }

  a:hover,
    a:focus {
      transition: .5s ease-in-out;
    }
 
  @media (min-width: ${({ theme }) => theme.tablet}) { 
    font-size: 1.25em;
    padding: 0 10px 0 10px;
    
    .bottom {
      display: flex;
      flex-direction: row;
      align-items: start;
      justify-content: space-between;
    }
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    font-size: 1.5em;
  }
  
`;

export default GlobalStyles;
