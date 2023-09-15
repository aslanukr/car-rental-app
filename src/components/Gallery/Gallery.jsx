import { useEffect, useState } from "react";
import { GalleryGrid } from "./Gallery.styled";
import { getCatalog } from "src/services/api";
import CarCard from "../CarCard/CarCard";

import { useSelector } from "react-redux";
import { selectFavorites } from "src/redux/favorites/selectors";

const Gallery = ({ renderFavorites }) => {
  const [cars, setCars] = useState([]);
  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    async function fetch() {
      try {
        const result = await getCatalog();
        setCars(result);
      } catch (error) {
        console.error("Error fetching catalog:", error);
      }
    }

    fetch();
  }, []);

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
