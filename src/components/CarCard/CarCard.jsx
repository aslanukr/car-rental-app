import CarImage from "../CarImage/CarImage";
import CardInfo from "../CardInfo/CardInfo";
import { CardButton, CardWrapper } from "./CarCard.styled";

const CarCard = ({ car }) => {
  return (
    <CardWrapper>
      <CarImage imageURL={car.img} />
      <CardInfo data={car} />
      <CardButton>Learn more</CardButton>
    </CardWrapper>
  );
};

export default CarCard;
