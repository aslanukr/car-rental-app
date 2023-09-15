import styled from "styled-components";

export const EmptyFavWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const EmptyFavText = styled.p`
  font-size: 25px;
  font-weight: 600;
`;

export const GoToBtn = styled.button`
  color: #ffffff;
  background-color: #3470ff;
  border: none;
  border-radius: 12px;
  padding: 12px 50px;
  font-weight: 600;
  font-size: 25px;
  cursor: pointer;
  transition: background-color 250ms ease-in;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
