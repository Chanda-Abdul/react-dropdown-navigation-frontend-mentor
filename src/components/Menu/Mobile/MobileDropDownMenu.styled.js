import styled from 'styled-components';

export const StyledMobileMenu = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding: 0;
  font-weight: 400;

  .burger-menu {
    max-height: 10vw;
    color: var(--almost-black);

    > .dropdown-menu {
      right: -100%;
    }
    &:hover,
    &:focus {
      color: var(--aqua-blue);
      text-shadow: 0.1px var(--medium-gray);
    }
  }

  .container::before {
    content: '';
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.75);
    animation: transitionIn .75s;
  }

  .dropdown-menu {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    animation: dropdown .75s;
    margin: 0;
    padding: 20px 30px;
    background-color: var(--almost-white);
    color: var(--medium-gray);
    width: 240px;
    height: 100vh;
    z-index: 3;
    top: -25px;
    right: -10vw;
  }

  a {
    color: var(--medium-gray);
    padding: 5px;
    &:hover,
    &:focus {
      color: var(--bright-purple);
      text-shadow: 0.1px 0.1px var(--almost-black);
    }
  }

  .close-menu {
    display: flex;
    justify-content: flex-end;
    background-color: transparent;
    padding: 0 10px;
    a:active,
    a:hover {
      color: var(--cornflower-blue);
    }
  }
  li {
    margin: 15px 0;
    font-weight: 500;
    animation: dropdown 1.5s;
    .level-one {
      width: 96px;
      height: 26px;
      font-size: 16px;
      line-height: 26px;
      letter-spacing: 0px;

      svg {
        padding: 0 10px;
      }
    }
  }

  .level-two {
    text-align: left;
    height: 26px;
    margin: 15px 20px;
    font-size: 16px;
    line-height: 26px;
    a:active,
    a:hover,
    a:focus {
      color: var(--aqua-blue);
    }
    img {
      padding-right: 15px;
      height: 20px;
      width: 17.5px;
      left: 0px;
      top: 2px;
    }
  }

  .cta {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    flex-direction: flex-end;
    a:active,
    a:hover,
    a:focus {
      color: var(--cornflower-blue);
    }

    button {
      margin: 20px 5px 10px 5px;
      border: 1px solid var(--medium-gray);
      outline: none;
      background-color: var(--almost-white);
      color: var(--medium-gray);
      padding: 10px;
      border-radius: 15px;
      font-size: 15px;
      width: 90%;
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

    .content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
    ul {
      .features-list,
      .company-list {
        transition: ease-in-out 1.75s;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
`;
