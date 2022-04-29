import styled from "styled-components";

export const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  
  text-align: center;

  .hero-image{
      width: 100vw;
     
  }

  h1 {
    padding: 30px 10px 10px 10px;
    font-size: 2.25em;
    margin: 0;
    text-align: center;
  }

  p {
    text-align: center;
    color: var(--medium-gray);
    font-weight: 500;
    padding: 10px 20px;
    font-size: 1em;
    line-height: 1.5em;
  }

  button {
    margin: 10px 5px;
    padding: 15px 25px;
    background-color: var(--almost-black);
    color: var(--almost-white);
    border-radius: 10px;
    border: none;
    font-weight: 500;
    font-size: 1em;

    cursor: pointer;
  }

  button:hover {
    background-color: transparent;
    border: 1px solid var(--almost-black);
    color: var(--medium-gray);
    font-weight: 700;
    transform: scale(0.95) ease-in 2s;
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
    /* h1 {
    padding: 50px 10px 10px 10px;
    font-size: 4em;
    
  } */

  }


  /* 
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 50px 0;
    .hero-text {
      display: flex;
      flex-direction: column;
      width: 50%;
      align-items: left;
      padding: 50px 0;
    }
    h1 {
      width: 90%;
      padding: 50px 0 0 0;
      font-size: 1.5rem;
      line-height: 2rem;
      margin: 0;
      text-align: left;
      /* color: ${({ color }) => color || "var(--very-dark-cyan)"}; */
  /* } */
  /* p {
      width: 90%;
      padding: 10px 0 30px 0;
      font-size: 0.85rem;
      margin: 10px 0;
      text-align: left;
    } 
  } */
  /* @media (min-width: ${({ theme }) => theme.desktop}) {
    flex-direction: row;
    justify-content: space-around;
    margin: 25px 75px;
    .hero-text {
      width: 50%;
    }
    h1 {
      min-width: 20%;
      font-size: 2.5rem;
      line-height: 2.5rem;
    }
    p {
      max-width: 75%;
      font-size: 1.5rem;
    }
  } */
  img {
    @media (min-width: ${({ theme }) => theme.mobile}) {
      /* width: 100vw; */
      /* margin: 0; */
    }
    /* @media (min-width: ${({ theme }) => theme.tablet}) {
      width: 60%;
      padding: 10px;
    } */
    /* @media (min-width: ${({ theme }) => theme.desktop}) {
      width: 50%;
      padding: 25px;
    } */
  }
`;
