import React, {Component} from 'react';
import ProfileOverview from 'components/ProfileOverview';
import Employees from 'components/Employees';
import PropTypes from 'prop-types'

const propTypes = {
	companies: PropTypes.object.isRequired,
};

/**
 * This component renders information sections on specific companies
 * This component is connects and receives the companies prop from redux state
 */
class DetailsPage extends Component {
  render() {

    //The company is found from the companies object using the id parameter from the route component
    const company = this.props.companies[this.props.match.params.id];
    return (
      <React.Fragment>
        <ProfileOverview company={company} />
        <Employees employees={company.employees}/>
      </React.Fragment>);
  }
}

DetailsPage.propTypes = propTypes;
export default DetailsPage;
