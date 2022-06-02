import styled from 'styled-components';

export const StyledHeader = styled.div`

  .navigation {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 3em;
 

  @media (min-width: ${({ theme }) => theme.tablet}) {
    .navigation {
      .div {
        .div {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
      }
    }
  }
`;

export const Logo = styled.img`
  @media (min-width: ${({ theme }) => theme.tablet}) {
    width: 10vw;
  }
`;
