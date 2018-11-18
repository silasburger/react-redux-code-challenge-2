import React, { Component } from 'react';
import './styles.less';
import uuid from 'uuid/v4';

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

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const id = uuid();
    this.props.addCompany({ ...this.state, id, employees: [] });
    this.setState({ name: '', address: '', revenue: '', phone: '' });
  }

  render() {
    return (
      <div>
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
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default CompanyForm;
