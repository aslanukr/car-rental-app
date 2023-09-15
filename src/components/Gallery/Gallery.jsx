import { useEffect, useState } from "react";
import { GalleryGrid } from "./Gallery.styled";
import { getCatalog } from "src/services/api";
import CarCard from "../CarCard/CarCard";

const Gallery = () => {
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

  return (
    <GalleryGrid>
      {cars && cars.map((car) => <CarCard key={car.id} car={car} />)}
    </GalleryGrid>
  );
};

export default Gallery;
