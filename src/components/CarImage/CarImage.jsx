import { FavoriteBtn, Image, ImageThumb } from "./CarImage.styled";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const CarImage = ({ imageURL, alt }) => {
  return (
    <ImageThumb>
      <Image src={imageURL} alt={alt} />
      <FavoriteBtn>
        {/* <AiFillHeart color="#3470ff" size={18} /> */}
        <AiOutlineHeart color="white" size={18} />
      </FavoriteBtn>
    </ImageThumb>
  );
};

export default CarImage;
