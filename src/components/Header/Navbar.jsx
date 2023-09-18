import { Link, LinkList } from "./Header.styled";
import { LiaCarSideSolid, LiaHomeSolid } from "react-icons/lia";

import { RiHeartFill, RiHeartLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { selectFavTotal } from "src/redux/selectors";

const Navbar = () => {
  const { total } = useSelector(selectFavTotal);

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
            {total !== 0 ? (
              <>
                <span>{total}</span>
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
