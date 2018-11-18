import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import HomePage from 'containers/HomePage';
import DetailsPage from 'components/DetailsPage';

class Routes extends Component {
  render() {
    return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route exact path="/details" component={DetailsPage} />
    </Switch>
    );
  }
}

export default Routes;