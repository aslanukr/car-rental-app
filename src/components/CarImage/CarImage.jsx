import { Image, ImageThumb } from "./CarImage.styled";

const CarImage = ({ imageURL }) => {
  return (
    <ImageThumb>
      <Image src={imageURL} />
    </ImageThumb>
  );
};

export default CarImage;
