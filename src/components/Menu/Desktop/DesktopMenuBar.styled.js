import styled from 'styled-components';

export const StyledDesktopMenu = styled.div`

  display: flex;
  flex-direction: row;
  height: 35px;
  align-items: center;
  justify-content: space-between;

  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 85vw;
    align-items: left;
    margin: 25px;
  }

  .menu-links {
    color: var(--medium-gray);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 5px;
    padding: 5px;
    width: 375px;
  }

  .level-one {
    position: relative;
    margin: 5px 0;
    line-height: 2.5em;
    padding: 2px;
    svg {
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
    }
  }
  ul {
    .li {
    }
    .features-list,
    .company-list {
      animation: dropdown 1s;
      transition: ease-in-out 1.75s;
      display: flex;
      flex-direction: column;
      justify-content: start;
      position: absolute;
      padding: 20px 5px;
      border-radius: 10px;
      background-color: var(--almost-white);
      box-shadow: 0px 2px 5px 0px var(--light-gray);
      a:hover,
      a:focus {
        color: var(--aqua-blue);
        text-shadow: 0 0 0.1px 0.1px var(--almost-black);
      }
    }

    .features-list {
      top: 40px;
      margin: 20px -70px;
    }
    .company-list {
      top: 40px;
      margin: 20px 90px;
    }
  }

  a {
    color: var(--medium-gray);
    padding: 5px;
    &:hover,
    &:focus {
      color: var(--bright-purple);
      text-shadow: 0 0 0.1px 0.1px var(--almost-black);
    }
  }

  .cta {
    margin-left: 40px;
    display: flex;
    align-items: center;
    a:active,
    a:hover,
    a:focus {
      color: var(--cornflower-blue);
    }
    button {
      margin: 0 30px;
      font-weight: 400;
      width: 104px;
      border: 1px solid var(--medium-gray);
      outline: none;
      background-color: var(--almost-white);
      color: var(--medium-gray);
      padding: 10px;
      border-radius: 15px;
      font-size: 15px;
      transform: scale(0.95);
      transition: 0.5s ease-in;
    }

    button:hover {
      background-color: transparent;
      border: 1px solid var(--cornflower-blue);
      color: var(--cornflower-blue);
      font-weight: 700;
      cursor: pointer;
      transform: scale(0.95);
    }
  }
`;
