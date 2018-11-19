import { connect } from 'react-redux';
import DetailsPage from 'components/DetailsPage';

//This function makes sure that DetailsPage component gets companies object form redux store
const mapStateToProps = state => ({
  companies: state.companies
});

export default connect(mapStateToProps)(DetailsPage);

