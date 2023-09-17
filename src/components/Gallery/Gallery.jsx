import { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { GalleryGrid, GalleryWrapper, LoadMoreBtn } from "./Gallery.styled";

import CarCard from "../CarCard/CarCard";

import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectFavorites } from "src/redux/selectors";

import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import { getCatalog } from "src/services/api";
import { setCars } from "src/redux/cars/carsSlice";
import {
  FilterSection,
  GallerySection,
} from "src/pages/Catalog/Catalog.styled";
import Filter from "../Filter/Filter";

const Gallery = ({ renderFavorites }) => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const favorites = useSelector(selectFavorites);

  const [favoriteCars, setFavoriteCars] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [filteredCars, setFilteredCars] = useState([]);
  const [filterValues, setFilterValues] = useState(null);

  useEffect(() => {
    const fetchCars = async (page) => {
      setIsLoading(true);
      try {
        const response = await getCatalog(page);
        dispatch(setCars(response));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCars(page);
  }, [dispatch, page]);

  useEffect(() => {
    const favoriteCars = cars.filter((car) => favorites.includes(car.id));
    setFavoriteCars(favoriteCars);
  }, [cars, favorites]);

  useEffect(() => {
    const filtered = cars.filter((car) => {
      if (filterValues && car.make !== filterValues) {
        return false;
      }
      return true;
    });

    setFilteredCars(filtered);
  }, [cars, filterValues]);

  const handleFilter = (e) => {
    setFilterValues(e);
  };

  const isLoadMoreVisible = cars.length % 8 === 0;

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
    scroll.scrollToBottom({
      duration: 1000,
    });
  };

  return (
    <>
      {!renderFavorites && (
        <FilterSection>
          <Filter onFilter={handleFilter} />
        </FilterSection>
      )}
      <GallerySection>
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
                    ? favoriteCars.map((car) => (
                        <CarCard key={car.id} car={car} />
                      ))
                    : filteredCars.map((car) => (
                        <CarCard key={car.id} car={car} />
                      )))}
              </GalleryGrid>
              {!renderFavorites && isLoadMoreVisible && (
                <ScrollLink to="bottom" smooth={true} duration={1000}>
                  <LoadMoreBtn onClick={handleLoadMore} disabled={isLoading}>
                    {isLoading ? "Loading..." : "Load more"}
                  </LoadMoreBtn>
                </ScrollLink>
              )}
            </>
          )}
          <div></div>
        </GalleryWrapper>
      </GallerySection>
    </>
  );
};

export default Gallery;
