import styled from 'styled-components';

export const StyledHero = styled.section`
  animation: transitionIn 1.75s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0;
  padding: 0;

  .hero-image {
    width: 100vw;
  }

  h2 {
    height: 42px;
    width: 343px;
    font-size: 36px;
    font-weight: 700;
    letter-spacing: -0.5px;
    text-align: center;
    margin: 20px auto;
  }

  p {
    width: 343px;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: center;
    color: var(--medium-gray);
    margin: 10px auto;
  }

  button {
    background-color: var(--almost-black);
    color: var(--almost-white);
    border: 1px solid var(--almost-black);

    &:hover {
      background-color: transparent;
      border: 1px solid var(--almost-black);
      color: var(--medium-gray);
      transition: 0.5s ease-in;
    }
  }

  .client-list {
    padding: 30px auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .clients {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  li img {
    margin: 10px;
    width: 65px;
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
    .container {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      margin: 50px 10vw 10px 10vw;
      padding: 10px 0;
      width: 90vw;
    }

    .hero-image {
      width: 40vw;
      height: 53vw;
      padding-left: 25px;
    }
    .hero-text {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin: 25px;
      padding: 10px;
      height: 53vw;
    }

    h2 {
      padding: 0px 75px;
      margin-bottom: 125px;
      font-size: 60px;
      font-weight: 700;
      line-height: 60px;
      letter-spacing: -1.1px;
      text-align: left;
    }
    p {
      margin-left: 75px;
      width: 40vw;
      text-align: left;
    }

    .client-list {
      padding: 0 25px 0 0;
      margin-left: 75px;

      .clients {
        display: flex;
        flex-direction: row;
      }

      li {
        padding: 10px;
      }
    }
    button {
      margin-left: 75px;
      margin-top: 0;
    }
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    .hero-image {
      width: 48vw;
      height: 64vw;
    }
    .hero-text {
      width: 48vw;
      height: 64vw;
      justify-content: space-evenly;
      margin: 0;
    }

    h2 {
      font-size: 80px;
      font-weight: 700;
      line-height: 80px;
      letter-spacing: -1.1px;
      margin-left: 0;
    }

    p {
      max-width: 445px;
      font-size: 18px;
      font-weight: 400;
      line-height: 28px;
      margin-top: 50px;
    }

    .client-list {
      justify-content: space-evenly;
      .clients {
        width: 40vw;
      }

      li img {
        width: 6vw;
      }
    }
    button {
      margin-left: 75px;
      margin-top: 0;
    }
  }
`;
