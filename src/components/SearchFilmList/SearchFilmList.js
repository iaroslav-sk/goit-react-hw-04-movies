import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import style from './SearchFilmList.module.css';

class SearchFilmList extends Component {
  searchPush = () => {
    const { searchQuery } = this.props.state;
    this.props.history.push({
      ...this.props.location,
      search: `query=${searchQuery}`,
    });

    this.setState(prevState => ({
      movies: [...prevState.this.props.movies],
    }));
  };

  render() {
    const { movies } = this.props;
    const { url } = this.props.match;
    const { location, searchQuery } = this.props;

    return (
      <>
        <ul>
          {movies.map(
            movie =>
              movie.title && (
                <li key={movie.id} className={style.listItem}>
                  <Link
                    to={{
                      pathname: `${url}/${movie.id}`,
                      state: {
                        from: location,
                        search: searchQuery,
                      },
                    }}
                  >
                    {movie.original_title}
                  </Link>
                </li>
              ),
          )}
        </ul>
      </>
    );
  }
}

export default withRouter(SearchFilmList);
