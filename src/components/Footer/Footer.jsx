import { Link } from "react-router-dom";
import { FooterContainer, FooterText } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        Created by
        <Link to="https://github.com/aslanukr/car-rental-app">
          Vitaliy Korostylov
        </Link>
        <span>2023</span>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
