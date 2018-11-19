import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './styles.css';

/**
 * CompanyForm component adds company to redux state on submit
 * The addCompany function is passed down from connected parent function to allow changes to redux state in this component
 */
class CompanyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      revenue: '',
      phone: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //This function handles controls the input fields in component state
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  //On submit the addCompany function is passed data along with an id (uuid) and a empty array for employees
  handleSubmit(evt) {
    evt.preventDefault();
    const id = uuid();
    this.props.addCompany({ ...this.state, id, employees: [] });
    this.setState({ name: '', address: '', revenue: '', phone: '' });
  }

  render() {

    //This variable makes sure the value in state are not emppty and not a falsy value. It controls if the submit button is enabled
    const isDisabled = !Object.values(this.state).every(fieldValue=>fieldValue!=='' && (Boolean(+fieldValue)===true || isNaN(+fieldValue)));
    return (
      <div className="company-form-wrapper">
      <h1 className="company-form-header">Create New Company</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            id="name"
            value={this.state.name}
          />
          <label htmlFor="address">Address</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="address"
            id="address"
            value={this.state.address}
          />
          <label htmlFor="revenue">Revenue</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="revenue"
            id="revenue"
            value={this.state.revenue}
          />
          <label htmlFor="phone">Phone</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="phone"
            id="phone"
            value={this.state.phone}
          />
          <button disabled={isDisabled}>Save</button>
        </form>
      </div>
    );
  }
}

export default CompanyForm;
