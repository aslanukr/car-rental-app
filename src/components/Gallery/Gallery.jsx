import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { GalleryGrid, GalleryWrapper, LoadMoreBtn } from "./Gallery.styled";

import { selectCars, selectFavTotal } from "src/redux/selectors";
import CarCard from "../CarCard/CarCard";
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
import {
  addFavoritesToLocalStorage,
  getFavoritesLocalStorage,
  removeFromFavoritesLocalStorage,
} from "src/utilities/localStorage";
import { setFavTotal } from "src/redux/favorites/favoriteCarsSlice";

const LOCAL_STORAGE_KEY = "favorites";

const Gallery = ({ renderFavorites }) => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  const [favoriteCars, setFavoriteCars] = useState(getFavoritesLocalStorage());

  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [allCars, setAllCars] = useState(null);
  const [filteredCars, setFilteredCars] = useState([]);
  const [filterParams, setFilterParams] = useState(null);

  useEffect(() => {
    const storedFavoriteCars = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (storedFavoriteCars) {
      setFavoriteCars(storedFavoriteCars);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favoriteCars));
  }, [favoriteCars]);

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

  const isCarFavorite = (car) => favoriteCars.some((fav) => fav.id === car.id);

  const toggleFavorite = (car) => {
    const isCarFavorite = favoriteCars.some((favCar) => favCar.id === car.id);
    if (isCarFavorite) {
      removeFromFavoritesLocalStorage(car.id);

      setFavoriteCars((prevFavorites) =>
        prevFavorites.filter((favCar) => favCar.id !== car.id)
      );
      dispatch(setFavTotal(favoriteCars.length));
    } else {
      addFavoritesToLocalStorage(car);

      setFavoriteCars((prevFavorites) => [...prevFavorites, car]);
      console.log(favoriteCars);
      dispatch(setFavTotal(favoriteCars.length));
    }
  };

  const handleToggleFavorite = (car) => {
    const isCarFavorite = favoriteCars.some((favCar) => favCar.id === car.id);

    if (isCarFavorite) {
      removeFromFavoritesLocalStorage(car.id);

      setFavoriteCars((prevFavorites) =>
        prevFavorites.filter((favCar) => favCar.id !== car.id)
      );
    } else {
      addFavoritesToLocalStorage(car);

      setFavoriteCars((prevFavorites) => [...prevFavorites, car]);
    }
  };

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
                    ? favoriteCars.map((favoriteCar) => (
                        <CarCard
                          key={favoriteCar.id}
                          car={favoriteCar}
                          isFavorite={true}
                          toggleFavorite={() => toggleFavorite(favoriteCar)}
                          onToggleFavorite={handleToggleFavorite}
                        />
                      ))
                    : data.map((car) => (
                        <CarCard
                          key={car.id}
                          car={car}
                          isFavorite={isCarFavorite(car)}
                          toggleFavorite={() => toggleFavorite(car)}
                          onToggleFavorite={handleToggleFavorite}
                        />
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
