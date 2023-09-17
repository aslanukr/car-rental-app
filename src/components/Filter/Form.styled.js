import styled from "styled-components";

export const Form = styled.form`
  display: flex;
`;

export const FormBtn = styled.button`
  display: block;

  border-radius: 12px;
  padding: 14px 44px;
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
