import React, { lazy, Suspense } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import style from './css/main.module.css';

const HomePage = lazy(() =>
  import('./views/HomePage/HomePage.js' /* webpackChunkName: "HomePagee" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage.js' /* webpackChunkName: "MoviesPage" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage.js' /* webpackChunkName: "MovieDetailsPage" */
  ),
);
const NotFoundPage = lazy(() =>
  import('./views/NotFoundPage.js' /* webpackChunkName: "NotFoundPage" */),
);

const App = () => (
  <>
    <ul className={style.header}>
      <li>
        <NavLink
          exact
          to="/"
          className={style.base}
          activeClassName={style.active}
        >
          HomePage
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to="/movies"
          className={style.base}
          activeClassName={style.active}
        >
          MoviesPage
        </NavLink>
      </li>
    </ul>
    <Suspense fallback={<h2>Loading...</h2>}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  </>
);

export default App;
