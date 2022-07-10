import React, { Component } from "react";
import _ from "lodash";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";

import { getMovies } from "./services/fakeMovieService";
import { getGenres } from "./services/fakeGenreService";

import Table from "./components/table";
import Pagination from "./components/common/pagination";
import Paginate from "./components/utils/paginate";
import Header from "./components/header";
import CheckList from "./components/checkList";

class Counter extends Component {
  state = {
    movies: getMovies(),
    genres: [],
    searchQuery: "",
    data: {
      title: "",
      price: 0,
      bought: false,
      publishDate: new Date(),
    },
    percentage: 0,
    selectedGeneres: null,
    currentPage: 1,
    pageSize: 4,
  };

  calculatePersentage() {
    const boughtItems = this.state.movies.filter(
      (movie) => movie.liked === true
    );

    const unBOughtItems = this.state.movies.filter(
      (movie) => movie.liked !== true
    );

    const per =
      boughtItems.length / (boughtItems.length + unBOughtItems.length);

    console.log("boughtItems.length", boughtItems.length);
    console.log("unBOughtItems.length", unBOughtItems.length);

    return (per * 100).toFixed();
  }

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  componentDidMount() {
    this.setState({ percentage: this.calculatePersentage() });
  }

  removeCounter = (_counter) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== _counter.id
    );
    this.setState({ counters });
  };

  handleDelete = (_movie) => {
    const movies = this.state.movies.filter(
      (movie) => movie._id !== _movie._id
    );
    this.setState({ movies });
  };

  handleIncrement = (counter) => {
    let { counters } = this.state;
    counters = [...counters];
    let index = counters.indexOf(counter);

    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    let { counters } = this.state;
    counters = [...counters];
    let index = counters.indexOf(counter);

    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleToggle = (movie) => {
    let movies = [...this.state.movies];
    let index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].liked = !movies[index].liked;
    console.log("liked", movies[index].liked);
    this.setState({ movies });
    this.setState({ percentage: this.calculatePersentage() });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenereSelect = (genre) => {
    this.setState({ selectedGeneres: genre._id });
  };

  handleEditChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.doSubmit();
  };

  doSubmit = async () => {
    const newMovies = [{ ...this.state.data }, ...this.state.movies];
    this.setState({ movies: newMovies });

    const data = {
      title: "",
      price: 0,
      bought: false,
      publishDate: new Date(),
    };

    this.setState({ data });
    // movies.push(movieInDb);
    // await saveMovie(this.state.data);

    this.props.history.push("/");
  };

  render() {
    library.add(fas, far, faTwitter, faFontAwesome);
    const { genres, selectedGeneres } = this.state;
    let { movies: allMovies } = this.state;

    let filtered_ = selectedGeneres
      ? allMovies.filter((movie) => movie.genre._id == selectedGeneres)
      : allMovies;

    if (this.state.searchQuery)
      filtered_ = filtered_.filter((m) =>
        m.title.toLowerCase().startsWith(this.state.searchQuery)
      );
    allMovies = Paginate(
      filtered_,
      this.state.currentPage,
      this.state.pageSize
    );

    return (
      <section className="px-24 py-3 ">
        <div className="navbar bg-white shadow-md rounded-2xl">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">My Check List</a>
            <a className="btn btn-square normal-case text-xl">
              {this.state.movies.length}
            </a>
          </div>
          <div className="flex-none">
            <div class="form-control">
              <input
                type="text"
                name="query"
                value={this.state.searchQuery}
                onChange={(e) => this.handleSearch(e.currentTarget.value)}
                placeholder="Search items"
                class="input input-bordered"
              />

              {/* <input
                type="text"
                name="query"
                className="form-control my-3"
                placeholder="Search..."
                value={value}
                onChange={(e) => onChange(e.currentTarget.value)}
              /> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col px-72">
          <div className="mt-8">
            <progress
              class="progress progress-primary w-full"
              value={this.state.percentage}
              max="100"
            ></progress>
            <div className="flex flex-row justify-between">
              <p className="font-bold">Purchased items progress</p>
              <p>{this.state.percentage}%</p>
            </div>
          </div>
          <div className="my-8">
            <label for="my-modal" class="btn btn-sm btn-primary modal-button">
              Add Item
            </label>

            {/* <button class="btn btn-sm btn-primary">Add Item</button> */}
          </div>
          <div className="flex flex-col justify-center items-center">
            {/* <ul class="list-disc">
            {genres.map((genre) => (
              <li key={genre._id}>
                <a onClick={() => this.handleGenereSelect(genre)}>
                  {genre.name}
                </a>
              </li>
            ))}
          </ul> */}

            {allMovies.map((list) => (
              <CheckList
                lists={list}
                onToggle={() => this.handleToggle(list)}
                onDelete={() => this.handleDelete(list)}
                datasIntery={this.state.data}
                onChange={this.handleEditChange}
              />
            ))}

            {/* <Table movies={allMovies} onToggle={this.handleToggle} /> */}
            <Pagination
              currentPage={this.state.currentPage}
              pageSize={this.state.pageSize}
              itemsCount={this.state.movies.length}
              onPageChange={this.handlePageChange}
            />

            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
              <div class="modal-box relative">
                <label
                  for="my-modal"
                  class="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 class="font-bold text-lg">Add Items</h3>
                <p className="text-sm mb-3">
                  Please fill the requirements in below fields, so you can
                  create an item
                </p>
                <div class="form-control w-full max-w-xs">
                  <label class="label">
                    <span class="label-text">Item name</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={this.state.data.title}
                    onChange={this.handleChange}
                    placeholder="Type here"
                    class="input input-bordered w-full max-w-xs"
                  />

                  <label class="label">
                    <span class="label-text">Set Price</span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    value={this.state.data.price}
                    onChange={this.handleChange}
                    placeholder="Type here"
                    class="input input-bordered w-full max-w-xs"
                  />
                </div>

                <div class="modal-action">
                  <label
                    for="my-modal"
                    type="submit"
                    class="btn btn-sm"
                    onClick={this.handleSubmit}
                  >
                    Add Item
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  countMovies() {
    const { movies } = this.state;
    return movies.length > 0 ? (
      <p>There is {movies.length} Movies Found</p>
    ) : (
      "No movies Found"
    );
  }
}

export default Counter;
