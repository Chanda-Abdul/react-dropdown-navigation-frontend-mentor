import styled from "styled-components";

export const StyledHeader = styled.header`
  margin: 0 ; 
  display: flex; 
  width: 100vw; 
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 3em;
  margin: 0;
  padding: 0.75em;
  flex-direction: row;
  transition: all 1s;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    flex-direction: row;
    width: 100vw;
    margin: 10px;
    height: auto;
  margin: 0;
  padding: 0.75em;

    /* a >img {
        height: 1.5em; 
    } */
  }
  
 
  
`;

export const Logo = styled.img`
  @media (min-width: ${({ theme }) => theme.mobile}) {
    /* width: 35vw; */
  }
  @media (min-width: ${({ theme }) => theme.tablet}) {
    /* width: 25vw; */
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    /* width: 15vw; */
  }
`;



