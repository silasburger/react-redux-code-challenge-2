import React, { Component } from 'react';
import Card from 'components/Card';
import './styles.css'


/**
 * Companies component renders a header along with a series of company cards
 */
class Companies extends Component {
  render() {

    // Turn info prop values into array
    const companies = Object.values(this.props.companies);

    // Mapping companies to Card components
    const companyCards = companies
      .map(company => 
        <Card key={company.id} title={company.name} info={{
          name: {title: 'Name', sectionInfo: company.name},
          address: {title: 'Address', sectionInfo: company.address},
          revenue: {title: 'Revenue', sectionInfo: company.revenue},
          phone: {title: 'Phone', sectionInfo: company.phone},
        }} linkUrl={`details/${company.id}`}/>);
        
    return (
      <div className="companies-wrapper">
        <h1 className='companies-header'>Companies</h1>
        {companies.length ? (
          companyCards
        ) : (
          <i>There are currently no companies to review</i>
        )}
      </div>
    );
  }
}

export default Companies;
