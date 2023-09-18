import { Link, LinkList } from "./Header.styled";
import { LiaCarSideSolid, LiaHomeSolid } from "react-icons/lia";

import { RiHeartFill, RiHeartLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { selectFavorites } from "src/redux/selectors";

const Navbar = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <nav>
      <LinkList>
        <li>
          <Link to={`/`}>
            <LiaHomeSolid size={25} />
            HOME
          </Link>
        </li>
        <li>
          <Link to={`catalog`}>
            <LiaCarSideSolid size={25} />
            CATALOG
          </Link>
        </li>
        <li>
          <Link to={`favorites`}>
            {favorites.length !== 0 ? (
              <>
                <span>{favorites.length}</span>
                <RiHeartFill color="#3470ff" size={25} />
              </>
            ) : (
              <RiHeartLine size={25} />
            )}
            FAVORITES
          </Link>
        </li>
      </LinkList>
    </nav>
  );
};

export default Navbar;
