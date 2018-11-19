import React, { Component } from 'react';
import Card from 'components/Card';

/**
 * This component renders company info the the details page using the card component
 */
class ProfileOverview extends Component {
  render() {
    const cardInfo={
      address: {title: 'Address', sectionInfo: this.props.company.address},
      revenue: {title: 'Revenue', sectionInfo: this.props.company.revenue},
      phone: {title: 'Phone', sectionInfo: this.props.company.phone},
      totalEmployees: {title: 'Total Employees', sectionInfo: this.props.company.employees.length},
    }
    return (
      <React.Fragment>
        <Card title='Profile Overview' info={{...cardInfo}}/>
      </React.Fragment>
    );
  }
}

export default ProfileOverview;
