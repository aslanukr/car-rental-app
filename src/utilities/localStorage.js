export const addFavoritesToLocalStorage = (car) => {
  const favorites = getFavoritesLocalStorage();
  favorites.push(car);
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const removeFromFavoritesLocalStorage = (carId) => {
  const favorites = getFavoritesLocalStorage();
  const updatedFavorites = favorites.filter((car) => car.id !== carId);
  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
};

export const getFavoritesLocalStorage = () => {
  const favoritesJSON = localStorage.getItem("favorites");
  return favoritesJSON ? JSON.parse(favoritesJSON) : [];
};
