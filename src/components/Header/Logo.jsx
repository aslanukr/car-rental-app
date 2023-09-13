import { LogoIcon, LogoName, LogoSpan, LogoWrapper } from "./Header.styled";
import CarIcon from "../../assets/car.svg";

const Logo = () => {
  return (
    <LogoWrapper href="/">
      <LogoIcon src={CarIcon} />
      <LogoName>
        Car<LogoSpan>Rental</LogoSpan>
      </LogoName>
    </LogoWrapper>
  );
};

export default Logo;
