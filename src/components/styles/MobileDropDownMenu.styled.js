import styled from 'styled-components';

export const StyledMobileMenu = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding: 0;
  font-weight: 400;
  transition: all 500ms ease-in;

  .burger-menu {
    max-height: 10vw;
    transition: color 300ms ease-in;
    > .dropdown-menu {
      right: -100%;
    }
    &:hover,
    &:focus {
      color: var(--cornflower-blue);
    }
  }

  .container::before {
    content: '';
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .dropdown-menu {
    position: absolute;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    margin: 0;
    padding: 20px 30px;
    background-color: var(--almost-white);
    color: var(--medium-gray);
    min-width: 50vw;
    max-width: 75vw;
    height: 100vh;
    z-index: 3;
    top: -25px;
    right: -15px;
    transition: all 300ms ease-in;
  }

  a {
    color: var(--medium-gray);
    transition: color 300ms ease-in-out;
    padding: 5px;
    &:hover,
    &:focus {
      color: var(--cornflower-blue);
      text-shadow: .1px .1px var(--almost-black);
    }
  }

  .close-menu {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    background-color: transparent;
    color: var(--medium-gray);
  }

  .close-button {
    transition: color 300ms ease-in-out;
    &:hover,
    &:focus {
      color: var(--cornflower-blue);
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
      border: 1px solid var(--medium-gray);
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
      border: 2px solid var(--cornflower-blue);
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
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
`;
