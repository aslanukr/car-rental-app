import { Image, ImageThumb } from "./CarImage.styled";

const CarImage = ({ imageURL, alt }) => {
  return (
    <ImageThumb>
      <Image src={imageURL} alt={alt} />
    </ImageThumb>
  );
};

export default CarImage;
