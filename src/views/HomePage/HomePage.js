import axios from 'axios';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import style from './HomePage.module.css';
class HomePage extends Component {
  state = {
    movies: [],
  };
  async componentDidMount() {
    const API_KEY = '4b778d4c29fb731b86ff7a9149d1de58';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const response = await axios.get(
      `${BASE_URL}/trending/all/day?api_key=${API_KEY}&page=1`,
    );

    this.setState({
      movies: response.data.results,
    });
  }

  render() {
    const { movies } = this.state;
    const { url } = this.props.match;
    const { location } = this.props;
    return (
      <>
        <h1>Trending today</h1>
        <ul className={style.trandingList}>
          {movies.map(
            movie =>
              movie.title && (
                <li key={movie.id} className={style.trandingListItem}>
                  <Link
                    to={{
                      pathname: `${url}movies/${movie.id}`,
                      state: {
                        from: location,
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

export default withRouter(HomePage);
