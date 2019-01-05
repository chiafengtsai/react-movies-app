import React, { Component } from "react";

class MovieForm extends Component {
  handleClick = () => {
    this.props.history.push("/movies");
  };
  render() {
    const { match } = this.props;
    return (
      <React.Fragment>
        <h1>Movie Form {match.params.id}</h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.handleClick}
        >
          Save
        </button>
      </React.Fragment>
    );
  }
}

export default MovieForm;
