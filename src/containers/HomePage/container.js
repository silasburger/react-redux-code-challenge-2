import { connect } from 'react-redux';
import HomePage from 'components/HomePage';
import actions from 'store/features/companies/actions'

//This function makes sure HomePage gets these functions for change redux state
const mapDispatchToProps = dispatch => ({
	addCompany: (companyData) => dispatch(actions.addCompany(companyData)),
	addEmployee: (employeeData) => dispatch(actions.addEmployee(employeeData)),
});

//This function makes sure that HomePage component gets companies object form redux store
const mapStateToProps = state => ({
	companies: state.companies
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

