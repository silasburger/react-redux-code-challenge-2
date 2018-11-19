import React, { Component } from 'react';
import Card from 'components/Card';
import uuid from 'uuid/v4';
import './styles.css';

/**
 * This component renders employee cards from passed in employeed prop 
 * The card component is used to render the employee information
 */
class Employees extends Component {
  render() {
    const employeeCards = this.props.employees.map(employee => (
      <Card
        key={uuid()}
        title={employee.name}
        info={{ address: { title: 'Address', sectionInfo: employee.address } }}
      />
    ));
    return (
      <div className="employees-wrapper">
        <h1 className="employees-header">Employees</h1>
        {employeeCards}
      </div>
    );
  }
}

export default Employees;
