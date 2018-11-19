import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import uuid from 'uuid/v4';

/**
 * Card component takes props of info, title and linkUrl
 * Renders a multipurpose card
 * Takes info prop in this format:
 *    {title: 'Title', sectionInfo: 'section info'}
 */
class Card extends Component {
  render() {

    // Turn info prop values into array
    const propInfo = Object.values(this.props.info);

    // Map array to elements to display info from props.info
    const cardInfo = propInfo.map(section => (
      <div key={uuid()}>
        <b>{section.title}</b>
        <br />
        <i>{section.sectionInfo}</i>
      </div>
    ));
    return (
      <div className="card-wrapper">
        <h2>{this.props.title}</h2>
        <div className="card-info-wrapper">
          {cardInfo}
          {this.props.linkUrl ? (
            <Link to={this.props.linkUrl}>View Details</Link>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Card;
