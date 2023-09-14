import styled from "styled-components";

export const ImageThumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 274px;
  height: 268px;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
