export function getFavorites() {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
}

export function addToFavorites(id) {
  const favorites = getFavorites();
  favorites.push(id);
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

export function removeFromFavorites(id) {
  const favorites = getFavorites();
  const updatedFavorites = favorites.filter((favId) => favId !== id);
  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
}
