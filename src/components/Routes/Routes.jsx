import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import HomePage from 'containers/HomePage';
import DetailsPage from 'containers/DetailsPage';
import NotFoundPage from 'components/NotFoundPage'

/**
 * This component handles routing users to either the homepage or a company page
 */
class Routes extends Component {
  render() {
    return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/details/:id" render={(props)=><DetailsPage {...props} />} />
      <Route path="/" component={NotFoundPage} />
    </Switch>
    );
  }
}

export default Routes;