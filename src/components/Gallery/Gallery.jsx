import { useEffect, useState } from "react";
import { GalleryGrid } from "./Gallery.styled";
import { getCatalog } from "src/services/api";
import CarCard from "../CarCard/CarCard";
import { getFavorites } from "src/utilities/localStorage";

const Gallery = ({ renderFavorites }) => {
  const [cars, setCars] = useState([]);

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

  const favIds = getFavorites();
  const favoriteCars = cars.filter((car) => favIds.includes(car.id));

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
