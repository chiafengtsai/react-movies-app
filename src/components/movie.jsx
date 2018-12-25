import React, { Component } from "react";
const Movie = props => {
  const { title, genre, stock, rate } = props;
  return (
    <tr>
      <th scope="row">{title}</th>
      <td>{genre}</td>
      <td>{stock}</td>
      <td>{rate}</td>
      <td>
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Movie;
