import { Link, LinkList } from "./Header.styled";

const Navbar = () => {
  return (
    <nav>
      <LinkList>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`catalog`}>Catalog</Link>
        </li>
        <li>
          <Link to={`favorites`}>Favorites</Link>
        </li>
      </LinkList>
    </nav>
  );
};

export default Navbar;
