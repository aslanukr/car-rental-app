import { HeaderContainer } from "./Header.styled";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <Logo />
        <Navbar />
      </HeaderContainer>
    </header>
  );
};

export default Header;
