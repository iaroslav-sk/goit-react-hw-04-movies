import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import { Route } from 'react-router-dom';

class MoviesPage extends Component {
  render() {
    const { path } = this.props.match;
    return (
      <>
        <Route
          path={path}
          render={props => {
            return <SearchBar {...props} />;
          }}
        />
      </>
    );
  }
}

export default MoviesPage;
