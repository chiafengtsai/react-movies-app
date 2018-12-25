import React, { Component } from "react";
import Movie from "./movie";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  render() {
    const { length: count } = this.state.movies;

    if (count === 0) return <h1>There are no movies in the database.</h1>;

    return (
      <React.Fragment>
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
            {this.state.movies.map(movie => {
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
      </React.Fragment>
    );
  }
}

export default Movies;
