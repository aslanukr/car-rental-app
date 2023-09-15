import { useNavigate } from "react-router-dom";
import {
  EmptyFavText,
  EmptyFavWrapper,
  GoToBtn,
} from "./EmptyFavorites.styled";
import { AiOutlineHeart } from "react-icons/ai";

const EmptyFavorites = () => {
  const navigate = useNavigate();
  return (
    <EmptyFavWrapper>
      <AiOutlineHeart size={100} color="#3d6889" />
      <EmptyFavText>There are no cars added to your favorites yet</EmptyFavText>
      <GoToBtn onClick={() => navigate("/catalog")}>Pick a car</GoToBtn>
    </EmptyFavWrapper>
  );
};

export default EmptyFavorites;
