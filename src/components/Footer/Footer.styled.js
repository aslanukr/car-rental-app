import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  margin-top: auto;
  display: flex;
  align-items: center;
  padding: 70px 100px;
  justify-content: space-between;
  height: 100px;
  background-color: #3d6889;
`;

export const FooterText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  gap: 5px;
`;

export const SocialsWrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: start;
`;

export const ContactLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: white;
  gap: 10px;
`;
