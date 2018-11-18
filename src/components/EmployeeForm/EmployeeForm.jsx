import React, { Component } from 'react';
import Routes from 'components/Routes';
import NavBar from 'components/NavBar';
import './styles.less';

class EmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      employer: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    const companiesValues = Object.values(this.props.companies);
    const employerOptions = this.props.companies
      ? companiesValues.map(company => (
          <option key={company.id} value={company.name}>
            {company.name}
          </option>
        ))
      : null;
    return (
      <div>
        <form>
          <label htmlFor="name">Name</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            id="name"
          />
          <label htmlFor="address">Address</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="address"
            id="address"
          />
          <label htmlFor="employer">Employer</label>
          <select
            onChange={this.handleChange}
            type="text"
            name="employer"
            id="employer"
          >
          <option value="">Select Employer</option>
            {employerOptions}
          </select>
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default EmployeeForm;
