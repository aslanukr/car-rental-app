import { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { GalleryGrid, GalleryWrapper, LoadMoreBtn } from "./Gallery.styled";

import CarCard from "../CarCard/CarCard";

import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectFavorites } from "src/redux/selectors";

import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import { getAllCars, getCatalog } from "src/services/api";
import { setCars } from "src/redux/cars/carsSlice";
import {
  FilterSection,
  GallerySection,
} from "src/pages/Catalog/Catalog.styled";
import Filter from "../Filter/Filter";
import filterCars from "src/utilities/filter";

const Gallery = ({ renderFavorites }) => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const favorites = useSelector(selectFavorites);

  const [favoriteCars, setFavoriteCars] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [allCars, setAllCars] = useState(null);
  const [filteredCars, setFilteredCars] = useState([]);
  const [filterParams, setFilterParams] = useState(null);

  useEffect(() => {
    async function fetchCars(page) {
      setIsLoading(true);
      try {
        const response = await getCatalog(page);
        dispatch(setCars(response));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCars(page);
  }, [dispatch, page]);

  useEffect(() => {
    if (!filterParams) return;

    async function fetchAllCars() {
      try {
        setIsLoading(true);
        const response = await getAllCars();
        setAllCars(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAllCars();
  }, [filterParams]);

  useEffect(() => {
    setFilteredCars([]);
    if (allCars && filterParams) {
      const filtered = filterCars(filterParams, allCars);
      setFilteredCars(filtered);
      dispatch(setCars(allCars));
    }
  }, [allCars, dispatch, filterParams]);

  const handleFilter = (e) => {
    setFilterParams(e);
  };

  useEffect(() => {
    const favoriteCars = cars.filter((car) => favorites.includes(car.id));
    setFavoriteCars(favoriteCars);
  }, [cars, favorites]);

  const isLoadMoreVisible = cars.length % 8 === 0;

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
    scroll.scrollToBottom({
      duration: 1000,
    });
  };

  const data = filteredCars.length ? filteredCars : cars;

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
                    : data.map((car) => <CarCard key={car.id} car={car} />))}
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
