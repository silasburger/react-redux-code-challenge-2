import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EmployeeForm from 'components/EmployeeForm'
import CompanyForm from 'components/CompanyForm'
import Companies from 'components/Companies'
import './styles.css';

const propTypes = {
	addEmployee: PropTypes.func.isRequired,
	addCompany: PropTypes.func.isRequired,
	companies: PropTypes.object.isRequired,
};

/**
 * This component renders a list of companies, a forms for adding companies and a form for adding employees
 * This component is connected to the redux store
 * PS Im aware it would be better design to just pass companies the employee names for the select input but I ran out of time.
 */
class HomePage extends Component {
	render() {
		return (
				<div className="home-wrapper">
					<Companies companies={this.props.companies}/>
					<CompanyForm  addCompany={this.props.addCompany}/>
					<EmployeeForm addEmployee={this.props.addEmployee} companies={this.props.companies}/>
				</div>
		);
	}
}

HomePage.propTypes = propTypes;
export default HomePage;