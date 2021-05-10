import React, { Component } from 'react';

class Cast extends Component {
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
