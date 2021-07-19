import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './auth';

// Pages
import HomePage from '../pages/homePage';

/* eslint-disable react/prop-types */
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);

const Routes = () => {
  return (
    <BrowserRouter>
      <div
        style={{
          width: '100vw',
          display: 'flex',
          flexWrap: 'no-wrap',
        }}
      >
        <Switch>
          <PrivateRoute path="/" exact component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
