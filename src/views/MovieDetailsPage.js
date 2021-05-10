import React, { Component } from 'react';
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

class MovieDetailsPage extends Component {
  state = {
    movie: {},
    credits: [],
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const API_KEY = '4b778d4c29fb731b86ff7a9149d1de58';
    const BASE_URL = 'https://api.themoviedb.org/3';

    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&page=1`,
    );
    const credits = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&page=1`,
    );
    const reviews = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&page=1`,
    );

    await this.setState({
      movie: response.data,
      credits: credits.data.cast,
      reviews: reviews.data.results,
    });
  }

  pageBackClick = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || '/');
  };

  render() {
    const { url, path } = this.props.match;
    const {
      id,
      title,
      backdrop_path,
      overview,
      genres,
      vote_average,
    } = this.state.movie;
    return (
      id !== undefined && (
        <>
          <button type="button" onClick={this.pageBackClick}>
            Back
          </button>
          <div>
            {backdrop_path !== null && (
              <img
                src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${backdrop_path}`}
                alt={title}
              />
            )}
            <h2>{title}</h2>
            <p>User score {vote_average.toString().replace('.', '')} %</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Ganres</h3>
            <ul>
              {genres.map(ganre => (
                <li key={ganre.id}>{ganre.name}</li>
              ))}
            </ul>
          </div>
          <h3>Additional information</h3>
          <ul>
            <Link to={`${url}/cast`}>Cast</Link>
          </ul>
          <ul>
            <Link to={`${url}/reviews`}>Films Reviews</Link>{' '}
          </ul>
          <Switch>
            <Route
              path={`${path}/cast`}
              render={props => {
                return <Cast {...props} cast={this.state.credits} />;
              }}
            />
            <Route
              path={`${path}/reviews`}
              render={props => {
                return <Reviews {...props} reviews={this.state.reviews} />;
              }}
            />
          </Switch>
        </>
      )
    );
  }
}

export default MovieDetailsPage;
