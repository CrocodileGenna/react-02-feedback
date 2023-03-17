import styled from '@emotion/styled';

export const CONTAINER_DIV = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const BUTTON = styled.button`
  padding: 2px 25px;
  border: none;
  border-radius: 3px;
  font-size: 12px;
  color: #808080;
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  transition: all 0.4s ease 0s;

  :hover,
  :focus {
    color: #fff;
    background-color: #000;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.55);
    transform: scale(1.2);
  }
`;
