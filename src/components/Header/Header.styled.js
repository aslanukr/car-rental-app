import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;
  padding: 12px 24px 12px 24px;

  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.3),
    rgba(94, 212, 255, 0.3),
    rgba(52, 112, 255, 0.4)
  );
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

export const LogoWrapper = styled.a`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const LogoIcon = styled.img`
  width: 70px;
`;

export const LogoName = styled.span`
  font-weight: 700;
  font-size: 50px;
  color: #3d6889;
`;

export const LogoSpan = styled.span`
  color: #3470ff;
`;

export const LinkList = styled.ul`
  justify-content: center;
  display: flex;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  font-size: 25px;
  font-weight: 500;
  color: #3d6889;

  &.active {
    color: #3470ff;
  }

  transition: color 250ms ease-in;

  &:hover,
  &:focus {
    color: #3470ff;
  }
`;
