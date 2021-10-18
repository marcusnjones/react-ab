import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * Defines the elements that comprise an EntryTable row.
 * @return {JSX.Element}
 */
class EntryRow extends Component {
  // eslint-disable-next-line require-jsdoc
  render() {
    return (
      <tr>
        <td>{this.props.firstName}</td>
        <td>{this.props.lastName}</td>
        <td>{this.props.email}</td>
        <td>{this.props.firstName}</td>
        <td>{this.props.address}</td>
        <td>{this.props.city}</td>
        <td>{this.props.state}</td>
        <td>{this.props.zip}</td>
        <td>
          <span className="date">{
            new Date(this.props.dateUpdated).toLocaleDateString()}
          </span>
          <span className="time">{
            new Date(this.props.dateUpdated).toLocaleTimeString()}
          </span>
        </td>
        <td>
          <ul className="action-list">
            <li>Edit</li>
            <li>Favorite</li>
            <li>Delete</li>
          </ul>
        </td>
      </tr>
    );
  }
}
EntryRow.propTypes = {
  _id: PropTypes.string,
  _dateCreated: PropTypes.string,
  dateUpdated: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zip: PropTypes.number,
};

export default EntryRow;
