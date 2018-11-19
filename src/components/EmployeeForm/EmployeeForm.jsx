import React, { Component } from 'react';
import './styles.css'

/**
 * EmployeeForm component adds employee to company already in redux state on submit
 * The addEmployee function is passed down from connected parent function to allow changes to redux state in this component
 */
class EmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      employer: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //This function handles controls the input fields in component state
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  //On submit the addEmployee is passed the data from state
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addEmployee(this.state);
    this.setState({name:'', address:'', employer:''})
  }

  render() {

    //This variable makes sure the value in state are not emppty and not a falsy value. It controls if the submit button is enabled
    const isDisabled = !Object.values(this.state).every(fieldValue=>fieldValue!=='' && (Boolean(+fieldValue)===true || isNaN(+fieldValue)));

    //The options for select input are found from companies object passed from connected component
    const companiesValues = Object.values(this.props.companies);
    const employerOptions = this.props.companies
      ? companiesValues.map(company => (
          <option key={company.id} value={company.id}>
            {company.name}
          </option>
        ))
      : null;
    return (
      <div className='employee-form-wrapper'>
      <h1 className='employee-form-header'>Create New Person</h1>
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
          <label htmlFor="employer">Employer</label>
          <select
            onChange={this.handleChange}
            type="text"
            name="employer"
            id="employer"
            value={this.state.employer}
          >
            <option value="">Select Employer</option>
            {employerOptions}
          </select>
          <button disabled={isDisabled} >Save</button>
        </form>
      </div>
    );
  }
}

export default EmployeeForm;
