import React from "react";

const MovieForm = ({ match, history }) => {
  return (
    <React.Fragment>
      <h1>Movie Form {match.params.id}</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </React.Fragment>
  );
};

export default MovieForm;

// class MovieForm extends Component {
//   handleClick = () => {
//     this.props.history.push("/movies");
//   };
//   render() {
//     const { match } = this.props;
//     return (

//     );
//   }
// }

// export default MovieForm;
