import styled from "styled-components";

export const StyledMenu = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  font-weight: 400;

  a {
    color: var(--medium-gray);
  }

  .close {
    display: flex;
    flex-direction: row;
    justify-content: end;
    padding: 10px;
    background-color: transparent;
    color: var(--medium-gray);
  }

  
  
  .level-one {
    margin: 30px 0;
    line-height: 2.5em;
    img {
      padding: 0 10px;
    }
  }

  .level-two {
    margin: 5px 20px;
    font-size: 1em;
    line-height: 1.75em;
    img {
      padding-right: 15px;
    }
    ul > li {
      padding: 25px;
    }
  }

  

  .cta {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    flex-direction: flex-end;

    button {
      margin: 20px 5px 10px 5px;
      border: 2px solid var(--medium-gray);
      outline: none;
      background-color: var(--almost-white);
      color: var(--medium-gray);
      padding: 10px;
      border-radius: 15px;
      font-size: 15px;
      width: 90%;
    }

    button:hover {
      background-color: transparent;
      border: 1px solid var(--medium-gray);
      color: var(--medium-gray);
      font-weight: 700;
      cursor: pointer;
      transform: scale(0.95);
    }
  }
  /* &:hover {
    opacity: 0.5;
    
    background-color: var(--pink);
    color: var(--very-pale-cyan);
  } */

  @media (max-width: ${({ theme }) => theme.tablet-1}) {
    .dropdown-menu {
    position: absolute;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    margin: 0;
    padding: 20px 10px 10px 30px;
    background-color: var(--almost-white);
    color: var(--medium-gray);
    width: 60vw;
    height: 100vh;
    z-index: 2;
    box-shadow: 0px 0px 160px 0px var(--medium-gray);
    top: -20px;
    right: -10px;
    transition: 0.5s;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  ul {
    .features-list,
    .company-list {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  }
  @media (min-width: ${({ theme }) => theme.tablet}) {
    .close {
      display: none;
    }
    .dropdown-menu {
      position: relative;
      display: flex;
      flex-direction: row;
      /* width: 75vw; */
    }
    .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    .features-list,
    .company-list {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  .cta {
    /* margin-top: 20px; */
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    flex-direction: flex-end;
  }
  }
`;
