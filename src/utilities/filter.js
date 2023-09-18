const filterCars = ({ make, price, from, to }, cars) => {
  return cars.filter((car) => {
    const carPrice = Number(car.rentalPrice.slice(1));
    return (
      (make === "" || car.make === make) &&
      (price === "" || carPrice <= price) &&
      (from === "" || car.mileage >= from) &&
      (to === "" || car.mileage <= to)
    );
  });
};

export default filterCars;
