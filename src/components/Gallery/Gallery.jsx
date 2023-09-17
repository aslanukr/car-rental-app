import { useEffect, useState } from "react";
import { GalleryGrid, GalleryWrapper, LoadMoreBtn } from "./Gallery.styled";

import CarCard from "../CarCard/CarCard";

import { useSelector } from "react-redux";
import { selectFavorites } from "src/redux/selectors";

import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import { getCatalog } from "src/services/api";

const Gallery = ({ renderFavorites }) => {
  // const cars = useSelector(selectCars);
  const favorites = useSelector(selectFavorites);
  // const isLoading = useSelector(selectCarsIsLoading);
  // const error = useSelector(selectCarsError);
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCarsThunk(page));
  // }, [dispatch, page]);

  useEffect(() => {
    const fetchCars = async (page) => {
      setIsLoading(true);
      try {
        const response = await getCatalog(page);
        const newCars = response;
        console.log(newCars);
        setCars((prevCars) => [...prevCars, ...newCars]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCars(page);
  }, [page]);

  const favoriteCars = cars.filter((car) => favorites.includes(car.id));
  const isLoadMoreVisible = cars.length % 8 === 0;

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
          {!renderFavorites && isLoadMoreVisible && (
            <LoadMoreBtn onClick={handleLoadMore}>Load more</LoadMoreBtn>
          )}
        </>
      )}
    </GalleryWrapper>
  );
};

export default Gallery;
