import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: 30px 10px 20px 10px;
 
  .client-list {
    padding: 30px 10px 60px 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    img{
      width: 15vw;
    }
  }

   .attribution {
    position: static;
    display: flex;
    text-align: center;
    font-size: 0.75em;
    font-weight: 200;
    line-height: 0.25em;

    a{
      color: var(--cornflower-blue);
      margin: 1.2px;

    }
}  
`;
