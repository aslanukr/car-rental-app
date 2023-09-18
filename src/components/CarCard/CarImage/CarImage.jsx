import { FavoriteBtn, Image, ImageThumb } from "./CarImage.styled";
import { RiHeartFill, RiHeartLine } from "react-icons/ri";
import placeholderCar from "src/assets/images/placeholder-car.jpg";

const CarImage = ({ car, isFavorite, toggleFavorite }) => {
  const { img, make, model } = car;

  return (
    <ImageThumb>
      {img ? (
        <Image src={img} alt={`${make} ${model}`} />
      ) : (
        <Image src={placeholderCar} alt={`${make} ${model}`} />
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
