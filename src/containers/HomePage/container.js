import { connect } from 'react-redux';
import HomePage from 'components/HomePage';
import actions from 'store/features/companies/actions'

const mapDispatchToProps = dispatch => ({
	addCompany: (companyData) => dispatch(actions.addCompany(companyData)),
});

const mapStateToProps = state => ({
	companies: state.companies
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

