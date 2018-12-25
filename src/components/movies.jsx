import React, { Component } from "react";
import Movie from "./movie";
import Pagination from "./pagination";
import ListGroup from "./listGroup";

import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: getMovies(),
    currentPage: 1,
    pageSize: 4,
    currentGenre: "All Genres",
    genres: getGenres()
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenre = genre => {
    this.setState({ currentGenre: genre.name });
  };

  handleShowAllGenres = () => {
    this.setState({ currentGenre: "All Genres" });
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies } = this.state;

    if (count === 0) return <h1>There are no movies in the database.</h1>;
    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <React.Fragment>
        <ListGroup
          genres={this.state.genres}
          showAllGenres={this.handleShowAllGenres}
          currentGenre={this.state.currentGenre}
          handleGenre={this.handleGenre}
        />
        <p>Showing {count} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => {
              return (
                <Movie
                  title={movie.title}
                  genre={movie.genre.name}
                  stock={movie.numberInStock}
                  rate={movie.dailyRentalRate}
                  movie={movie}
                  key={movie.title}
                  onDelete={this.handleDelete}
                />
              );
            })}
          </tbody>
        </table>
        <Pagination
          itemCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
