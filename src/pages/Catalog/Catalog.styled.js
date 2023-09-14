import styled from "styled-components";

export const GalleryGrid = styled.ul`
  margin: 0 128px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 50px;
  column-gap: 29px;
`;

export const GallerySection = styled.section`
  margin-top: 50px;
`;
