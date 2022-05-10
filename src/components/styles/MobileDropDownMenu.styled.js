import styled from 'styled-components';

export const StyledMobileMenu = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  font-weight: 400;

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

  img,
  a {
    color: var(--medium-gray);
  }

  .close-menu {
    display: flex;
    justify-content: flex-end;
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
