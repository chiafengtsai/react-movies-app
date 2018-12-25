import React, { Component } from "react";
import Movie from "./components/movie";
import { getMovies } from "./services/fakeMovieService";

class App extends Component {
  state = {
    movies: getMovies()
  };
  render() {
    return (
      <main className="container">
        <p>Showing {this.state.movies.length} movies in the database.</p>
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
            {this.state.movies.map(m => {
              return (
                <Movie
                  title={m.title}
                  genre={m.genre.name}
                  stock={m.numberInStock}
                  rate={m.dailyRentalRate}
                  key={m.title}
                />
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }
}

export default App;
