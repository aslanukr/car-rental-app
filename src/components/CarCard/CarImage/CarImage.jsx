import { FavoriteBtn, Image, ImageThumb } from "./CarImage.styled";
import { RiHeartFill, RiHeartLine } from "react-icons/ri";
import placeholderCar from "src/assets/images/placeholder-car.jpg";

import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "src/redux/favorites/favoritesSlice";
import { selectIfCarFavorite } from "src/redux/selectors";

const CarImage = ({ imageURL, alt, id }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => selectIfCarFavorite(state, id));

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites({ carId: id }));
    } else {
      dispatch(addToFavorites({ carId: id }));
    }
  };

  return (
    <ImageThumb>
      {imageURL ? (
        <Image src={imageURL} alt={alt} />
      ) : (
        <Image src={placeholderCar} alt={alt} />
      )}
      <FavoriteBtn onClick={toggleFavorite}>
        {isFavorite ? (
          <RiHeartFill color="#3470ff" size={18} />
        ) : (
          <RiHeartLine color="#ffffff" size={18} />
        )}
      </FavoriteBtn>
    </ImageThumb>
  );
};

export default CarImage;
