import React, { Component } from 'react';
import Routes from 'components/Routes';
import './styles.css';


/**
 * App component render routes
 * Uses general styling
 */
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Routes />
      </React.Fragment>
    );
  }
}

export default App;
