import styled from 'styled-components';

export const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  text-align: center;
  margin: 0;
  padding: 0;
  flex-grow: 1;

  .hero-image {
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
    margin: 25px 0px;
    padding: 15px 25px;
    background-color: var(--almost-black);
    color: var(--almost-white);
    border-radius: 10px;
    border: 1px solid var(--almost-black);
    max-width: fit-content;
    font-weight: 700;
    font-size: 1em;
    cursor: pointer;
  }

  button:hover {
    background-color: transparent;
    border: 1px solid var(--almost-black);
    color: var(--medium-gray);
    transform: scale(0.95) ease-in 2s;
  }

  .client-list {
    padding: 60px 0;
    width: 100%;
    display: flex;

    .clients {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }

    li {
      padding: 10px;
    }
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
    .desktop-container {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      margin: 50px 10vw;
      padding: 10px 0;
      width: 80vw;
    }

    .hero-image {
      max-width: 40%;
      aspect-ratio: 4 / 3;
    }
    .hero-text {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: left;
      max-width: 40%;
      padding: 100px 20px 20px 50px;
    }

    h1 {
      padding: 0px 0px 25px 0px;
      font-size: 3rem;
      margin: 0;
      text-align: start;
    }
    p {
      padding: 25px 15px 25px 0px;
      font-weight: 400;
      margin: 0;
      text-align: start;
    }

    .client-list {
      padding: 0;
      padding-top: 25px;
      .clients {
        display: flex;
        flex-direction: row;
      }

      li {
        padding: 10px;
      }
    }
  }
`;
