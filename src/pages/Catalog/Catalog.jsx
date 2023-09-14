import { useEffect, useState } from "react";
import CarCard from "src/components/CarCard/CarCard";
import { getCatalog } from "src/services/api";
import { FilterSection, GalleryGrid, GallerySection } from "./Catalog.styled";

const Catalog = () => {
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
    <>
      <FilterSection>Filter</FilterSection>
      <GallerySection>
        <GalleryGrid>
          {cars && cars.map((car) => <CarCard key={car.id} car={car} />)}
        </GalleryGrid>
      </GallerySection>
    </>
  );
};

export default Catalog;
