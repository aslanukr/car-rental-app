import { useEffect, useState } from "react";
import CarImage from "./CarImage/CarImage";
import CardInfo from "./CardInfo/CardInfo";
import { CardButton, CardWrapper } from "./CarCard.styled";
import Modal from "../Modal/Modal";
import {
  addFavoritesToLocalStorage,
  getFavoritesLocalStorage,
  removeFromFavoritesLocalStorage,
} from "src/utilities/localStorage";

const CarCard = ({ car, onToggleFavorite }) => {
  const { id } = car;
  const [showModal, setShowModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavoritesLocalStorage(id);
    } else {
      addFavoritesToLocalStorage(car);
    }
    setIsFavorite(!isFavorite);

    onToggleFavorite(car);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
    document.body.classList.remove("modal-open");
  };

  useEffect(() => {
    const favorites = getFavoritesLocalStorage();
    setIsFavorite(favorites.some((favCar) => favCar.id === id));
  }, [id]);

  return (
    <CardWrapper>
      <CarImage
        car={car}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />
      <CardInfo data={car} />
      <CardButton onClick={toggleModal}>Learn more</CardButton>
      {showModal && <Modal onClose={toggleModal} car={car}></Modal>}
    </CardWrapper>
  );
};

export default CarCard;
