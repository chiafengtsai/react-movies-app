import React from "react";

const ListGroup = props => {
  const { genres, showAllGenres, currentGenre, handleGenre } = props;
  return (
    <ul className="list-group">
      <li
        className={
          currentGenre === "All Genres"
            ? "list-group-item active"
            : "list-group-item"
        }
        onClick={() => showAllGenres()}
      >
        All Genres
      </li>
      {genres.map(genre => (
        <li
          className={
            currentGenre === genre.name
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => handleGenre(genre)}
          key={genre._id}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};
export default ListGroup;
