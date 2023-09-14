import styled from "styled-components";

import { Swiper } from "swiper/react";

export const SwiperHero = styled(Swiper)`
  position: relative;
`;

export const SwiperImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-height: 100%;
`;

export const HeroButton = styled.button`
  position: absolute;
  z-index: 100;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  color: #ffffff;
  background-color: #3470ff;
  border: none;
  border-radius: 12px;
  padding: 12px 50px;
  font-weight: 700;
  font-size: 25px;
  cursor: pointer;
  transition: background-color 250ms ease-in;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
