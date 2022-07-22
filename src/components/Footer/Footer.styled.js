import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  margin: 50px auto 10px auto;

  .attribution {
    position: static;
    display: flex;
    text-align: center;
    justify-content: center;
    font-size: 0.75em;
    font-weight: 200;
    line-height: 0.25em;

    a {
      color: var(--medium-yellow);
      padding: 0 0 0 5px;
      text-shadow: 0.2px 0.2px var(--medium-gray);
    }
  }
`;
