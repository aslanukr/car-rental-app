import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 274px;
  height: 426px;
`;

export const CardButton = styled.button`
  margin-top: auto;
  width: 100%;
  border-radius: 12px;
  padding: 12px 0px;
  border: none;
  background-color: #3470ff;
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.5;

  transition: background-color 250ms ease-in;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
