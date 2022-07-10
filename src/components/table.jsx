import React, { Component } from "react";
import Like from "./common/like";

class Table extends Component {
  render() {
    return (
      <div className="overflow-x-auto">
        <table className="table w-full table-normal ">
          <thead>
            <tr>
              <th>title</th>
              <th>genre</th>
              <th>numberInStock</th>
              <th>dailyRentalRate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.movies.map((movie) => (
              <tr key={(movie._id, movie.title)}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    selected={movie.liked}
                    onToggle={() => this.props.onToggle(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.removeMovie(movie)}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
