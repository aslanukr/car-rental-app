import { useEffect } from "react";
import { GalleryGrid } from "./Gallery.styled";

import CarCard from "../CarCard/CarCard";

import { useDispatch, useSelector } from "react-redux";
import {
  selectCars,
  selectCarsError,
  selectCarsIsLoading,
  selectFavorites,
} from "src/redux/selectors";
import { getCarsThunk } from "src/redux/cars/carsThunk";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

const Gallery = ({ renderFavorites }) => {
  const cars = useSelector(selectCars);
  const favorites = useSelector(selectFavorites);
  const isLoading = useSelector(selectCarsIsLoading);
  const error = useSelector(selectCarsError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarsThunk());
  }, [dispatch]);

  const favoriteCars = cars.filter((car) => favorites.includes(car.id));

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : (
        <GalleryGrid>
          {cars &&
            (renderFavorites
              ? favoriteCars.map((car) => <CarCard key={car.id} car={car} />)
              : cars.map((car) => <CarCard key={car.id} car={car} />))}
        </GalleryGrid>
      )}
    </div>
  );
};

export default Gallery;
