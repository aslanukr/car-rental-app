import { Link, LinkList } from "./Header.styled";

const Navbar = () => {
  return (
    <nav>
      <LinkList>
        <li>
          <Link to={`/`}>HOME</Link>
        </li>
        <li>
          <Link to={`catalog`}>CATALOG</Link>
        </li>
        <li>
          <Link to={`favorites`}>FAVORITES</Link>
        </li>
      </LinkList>
    </nav>
  );
};

export default Navbar;
