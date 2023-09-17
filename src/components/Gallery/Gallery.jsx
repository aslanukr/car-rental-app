import { useEffect, useRef, useState } from "react";
import { GalleryGrid, GalleryWrapper, LoadMoreBtn } from "./Gallery.styled";

import CarCard from "../CarCard/CarCard";

import { useSelector } from "react-redux";
import { selectFavorites } from "src/redux/selectors";

import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import { getCatalog } from "src/services/api";

const Gallery = ({ renderFavorites }) => {
  const favorites = useSelector(selectFavorites);

  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loadMoreClicked, setLoadMoreClicked] = useState(false);
  const [favoriteCars, setFavoriteCars] = useState([]);

  const containerRef = useRef(null);

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

  useEffect(() => {
    const favoriteCars = cars.filter((car) => favorites.includes(car.id));
    setFavoriteCars(favoriteCars);
  }, [cars, favorites]);

  const isLoadMoreVisible = cars.length % 8 === 0;

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
    setLoadMoreClicked(true);
  };

  useEffect(() => {
    if (loadMoreClicked && containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [loadMoreClicked]);

  return (
    <GalleryWrapper>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : (
        <>
          <GalleryGrid ref={containerRef}>
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
