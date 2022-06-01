import styled from 'styled-components';

export const StyledDesktopMenu = styled.div`
  display: flex;
  flex-direction: row;
  width: 90vw;

  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .menu-links {
    color: var(--medium-gray);
    display: flex;
    flex-direction: row;
    margin: 5px;
    padding: 5px;
  }

  .level-one {
    position: relative;
    margin: 10px 0;
    line-height: 2.5em;
    padding: 5px;
    img {
      padding: 0 5px;
    }
  }

  .level-two {

    height: fit-content;
    margin: 5px 20px;
    font-size: 1em;
    line-height: 1.75em;
    img {
      padding-right: 15px;
    }
    ul > li {
    }
  }
  ul {
    .li {
    }
    .features-list {
      display: flex;
      flex-direction: column;
      justify-content: start;
      position: absolute;
      top: 50px;
      padding: 20px 5px;
      margin: 20px -70px;
      border-radius: 10px;
      background-color: var(--almost-white);
      color: var(--medium-gray);
      min-height: 200px;
      box-shadow: 0px 0px 16px 0px var(--medium-gray);
      transition: 0.5s;
    }
    .company-list {
      display: flex;
      flex-direction: column;
      justify-content: start;
      position: absolute;
      top: 50px;
      padding: 20px 5px;
      margin: 20px 90px;
      border-radius: 10px;
      background-color: var(--almost-white);
      min-height: 150px;
      box-shadow: 0px 0px 16px 0px var(--medium-gray);
      transition: 0.5s;
    }
  }

  a {
    color: var(--medium-gray);
  }

  .cta {
    margin-left: 40px;
    display: flex;

    align-items: center;

    button {
      margin: 0 15px;
      border: 2px solid var(--medium-gray);
      outline: none;
      background-color: var(--almost-white);
      color: var(--medium-gray);
      padding: 10px;
      border-radius: 15px;
      font-size: 15px;
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
`;
