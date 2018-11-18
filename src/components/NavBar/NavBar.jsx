import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavBar extends Component {
  render() {
    return (
      <div className="app__header">
        <div className="app__header-title">LMNOP LLC.</div>
        <div className="app__nav-wrapper">
          <div className="app__header-nav">
            <span className="app__nav-link">
              <Link to="/">Home</Link>
            </span>
            <span className="app__nav-link">
              <Link to="/details">Details</Link>
            </span>
            <span className="app__nav-link">
              <Link to="/number">Number</Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
