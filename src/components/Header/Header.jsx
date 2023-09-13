import { HeaderContainer } from "./Header.styled";

import Logo from "./Logo";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Navbar />
    </HeaderContainer>
  );
};

export default Header;
