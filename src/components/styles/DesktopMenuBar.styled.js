import styled from 'styled-components';

export const StyledDesktopMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* width: 100%; */
  margin: 0;
  padding: 0;
  font-weight: 400;

  .menu-bar {
    /* width: 100%; */
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  a {
    color: var(--almost-black);
  }

  .cta {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    flex-direction: flex-end;

    button {
      margin: 20px 5px 10px 5px;
      border: 2px solid var(--almost-black);
      outline: none;
      background-color: var(--almost-white);
      color: var(--almost-black);
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

  .level-one {

    margin: 30px 0;
    line-height: 2.5em;
    img {
      padding: 0 10px;
    }
  }

  .level-two {
    /* position: absolute; */
    top: 0;
    right: 0;
    height: fit-content;
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

  /* &:hover {
    opacity: 0.5;
    
    background-color: var(--pink);
    color: var(--very-pale-cyan);
  } */

  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  ul {
    /* width: 100%; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .features-list,
    .company-list {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  /* .cta {
    margin-top: 20px; 
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    flex-direction: flex-end;
  } */
`;
