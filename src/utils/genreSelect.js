export function genreSelect(items, currentGenre) {
  const genreItems = items.filter(item => {
    return item.genre.name === currentGenre;
  });
  return genreItems.length === 0 ? items : genreItems;
}
