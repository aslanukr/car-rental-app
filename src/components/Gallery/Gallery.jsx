import { useEffect, useState } from "react";
import { GalleryGrid, GalleryWrapper, LoadMoreBtn } from "./Gallery.styled";

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
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarsThunk(page));
  }, [dispatch, page]);

  const favoriteCars = cars.filter((car) => favorites.includes(car.id));

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <GalleryWrapper>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : (
        <>
          <GalleryGrid>
            {cars &&
              (renderFavorites
                ? favoriteCars.map((car) => <CarCard key={car.id} car={car} />)
                : cars.map((car) => <CarCard key={car.id} car={car} />))}
          </GalleryGrid>
          {!renderFavorites && (
            <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>
          )}
        </>
      )}
    </GalleryWrapper>
  );
};

export default Gallery;
