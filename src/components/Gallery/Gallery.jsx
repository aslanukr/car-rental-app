import { useEffect } from "react";
import { GalleryGrid } from "./Gallery.styled";

import CarCard from "../CarCard/CarCard";

import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectFavorites } from "src/redux/selectors";
import { getCarsThunk } from "src/redux/cars/carsThunk";

const Gallery = ({ renderFavorites }) => {
  const cars = useSelector(selectCars);
  const favorites = useSelector(selectFavorites);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarsThunk());
  }, [dispatch]);

  const favoriteCars = cars.filter((car) => favorites.includes(car.id));

  return (
    <GalleryGrid>
      {cars &&
        (renderFavorites
          ? favoriteCars.map((car) => <CarCard key={car.id} car={car} />)
          : cars.map((car) => <CarCard key={car.id} car={car} />))}
    </GalleryGrid>
  );
};

export default Gallery;
