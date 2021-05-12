import React, { Component } from 'react';

class Cast extends Component {
  // componentWillUnmount() {
  //   const { location, history } = this.props;
  //   history.push(location?.state?.from || '/movies');
  //   const { insearch } = this.props.state;
  //   this.getMoviesByQuery(this.state.insearch);
  //   this.props.history.push({
  //     ...this.props.location,
  //     search: `query=${insearch}`,
  //     state: { searchQuery: insearch },
  //   });
  // }

  componentDidMount() {}

  render() {
    const { cast } = this.props;
    return (
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            {actor.profile_path !== null && (
              <img
                src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${actor.profile_path}`}
                alt={actor.name}
              />
            )}
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Cast;
