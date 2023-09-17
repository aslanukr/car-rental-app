import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  gap: 18px;
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

export const LabelWrapper = styled.div`
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  top: calc((14px + 8px) * -1);

  color: rgba(138, 138, 137, 1);

  font-size: 14px;
  font-weight: 500;
  line-height: 128.571%;
`;

export const TextInputWrapper = styled.div`
  display: flex;
`;

export const TextInput = styled.input`
  font-family: inherit;
  font-size: 18px;
  font-weight: 500;
  line-height: 111.111%;

  width: 160px;
  border-radius: 14px;
  padding: 14px 18px;
  border: none;

  color: rgba(138, 138, 137, 0.2);
  background-color: rgba(247, 247, 251, 1);

  &::placeholder {
    color: rgba(18, 20, 23, 1);
  }

  &:focus {
    outline: none;
  }
`;

export const TextInputFrom = styled(TextInput)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
`;

export const TextInputTo = styled(TextInput)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;
