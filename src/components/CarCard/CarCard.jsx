import { useState } from "react";
import CarImage from "../CarImage/CarImage";
import CardInfo from "../CardInfo/CardInfo";
import { CardButton, CardWrapper } from "./CarCard.styled";
import Modal from "../Modal/Modal";

const CarCard = ({ car }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleCardBtnClick = () => {
    toggleModal(car.id);
  };

  return (
    <CardWrapper>
      <CarImage imageURL={car.img} />
      <CardInfo data={car} />
      <CardButton onClick={handleCardBtnClick}>Learn more</CardButton>{" "}
      {showModal && <Modal onClose={toggleModal} car={car}></Modal>}
    </CardWrapper>
  );
};

export default CarCard;
