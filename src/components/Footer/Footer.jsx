import { Link } from "react-router-dom";
import {
  ContactsWrapper,
  FooterContainer,
  FooterText,
  ContactLink,
  SocialsWrapper,
} from "./Footer.styled";
import {
  BsGithub,
  BsLinkedin,
  BsFillTelephoneFill,
  BsFacebook,
} from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

const Footer = () => {
  return (
    <FooterContainer>
      <SocialsWrapper>
        <Link to={"https://github.com/aslanukr"}>
          <BsGithub size={30} color="white" />
        </Link>
        <Link to={"https://www.linkedin.com/in/vitaliy-korostylov/"}>
          <BsLinkedin size={30} color="white" />
        </Link>
        <Link to={"https://www.facebook.com/vitaliy.korostylov"}>
          <BsFacebook size={30} color="white" />
        </Link>
      </SocialsWrapper>
      <FooterText>
        Created by
        <Link to="https://www.facebook.com/vitaliy.korostylov">
          Vitaliy Korostylov
        </Link>
        <span>2023</span>
      </FooterText>
      <ContactsWrapper>
        <ContactLink to={"tel:+380730000000"}>
          <BsFillTelephoneFill size={20} color="white" />
          +38 073 000 00 00
        </ContactLink>
        <ContactLink to={"email:order@car-rental.com"}>
          <MdAlternateEmail size={20} color="white" />
          order@car-rental.com
        </ContactLink>
      </ContactsWrapper>
    </FooterContainer>
  );
};

export default Footer;
