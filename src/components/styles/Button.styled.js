import styled from "styled-components";


export const Button = styled.button`
  border-radius: 10px;
  border: 1px solid hsl(0, 0%, 41%);
  cursor: pointer;
  font-weight: 700;
  padding: 10px 30px;
  margin: 10px;
  min-width: fit-content;
  /* align-self: left; */
  background-color: hsl(0, 0%, 8%);
  color: hsl(0, 0%, 98%);
  &:hover {
    opacity: 0.5;
    transform: scale(0.98);
  }
  @media (min-width: ${({ theme }) => theme.tablet}) {
    max-width: 30vw;
    border: 1px solid hsl(0, 0%, 41%);
    background-color: hsl(0, 0%, 98%);
  color: hsl(0, 0%, 8%);
  }
`;