import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EmployeeForm from 'components/EmployeeForm'
import CompanyForm from 'components/CompanyForm'
import Companies from 'components/Companies'
import './styles.less';

const propTypes = {
	addCompany: PropTypes.func.isRequired,
	companies: PropTypes.object.isRequired,
};

class HomePage extends Component {
	render() {
		console.log(this.props.companies)
		return (
			<React.Fragment>
				<div className="home__wrapper">
					<Companies />
					<EmployeeForm companies={this.props.companies}/>
					<CompanyForm  addCompany={this.props.addCompany}/>
				</div>
			</React.Fragment>
		);
	}
}

HomePage.propTypes = propTypes;
export default HomePage;