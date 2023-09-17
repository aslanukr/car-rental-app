import styled from "styled-components";

export const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const GalleryGrid = styled.ul`
  margin: 0 128px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 50px;
  column-gap: 29px;
`;

export const LoadMoreBtn = styled.button`
  margin-top: 100px;
  background: none;
  border: none;

  text-decoration: underline;
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;
