import React, { Component } from 'react';
import Routes from 'components/Routes';
import NavBar from 'components/NavBar';
import './styles.less';

class ProfileOverview extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Routes />
      </React.Fragment>
    );
  }
}

export default ProfileOverview;
