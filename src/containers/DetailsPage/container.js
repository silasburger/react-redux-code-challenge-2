import { connect } from 'react-redux';
import DetailsPage from 'components/DetailsPage';

const mapStateToProps = state => ({
  number: state.clickCounter.number,
});

export default connect(mapStateToProps)(DetailsPage);

