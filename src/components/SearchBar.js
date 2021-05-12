import React, { Component } from 'react';
import axios from 'axios';
import SearchFilmList from './SearchFilmList/SearchFilmList';
import { Route } from 'react-router-dom';

class SearchBar extends Component {
  state = {
    insearch: '',
    movies: [],
  };

  componentDidMount() {
    if (this.props.location?.state?.searchQuery !== undefined) {
      this.getMoviesByQuery(this.props.location.state.searchQuery);
    }
  }

  async getMoviesByQuery(searchQuery) {
    const API_KEY = '4b778d4c29fb731b86ff7a9149d1de58';
    const BASE_URL = 'https://api.themoviedb.org/3';
    if (searchQuery.length !== 0) {
      const response = await axios.get(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`,
      );
      this.setState({
        movies: response.data.results,
      });
    }
  }

  handleFormSubmit = event => {
    const { insearch } = this.state;

    event.preventDefault();
    this.getMoviesByQuery(this.state.insearch);

    this.props.history.push({
      ...this.props.location,
      search: `query=${insearch}`,
      state: { searchQuery: insearch },
    });
  };

  handleChange = event => {
    const { value } = event.currentTarget;
    this.setState({
      insearch: value,
    });
  };

  render() {
    const { movies, insearch } = this.state;

    return (
      <>
        <header>
          <form onSubmit={this.handleFormSubmit}>
            <button type="submit">
              <span>Search</span>
            </button>

            <input
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search films"
              value={this.state.insearch}
              onChange={this.handleChange}
            />
          </form>
        </header>

        {movies && (
          <Route
            path={''}
            render={props => {
              return (
                <SearchFilmList
                  {...props}
                  movies={movies}
                  searchQuery={insearch}
                />
              );
            }}
          />
        )}
      </>
    );
  }
}

export default SearchBar;
