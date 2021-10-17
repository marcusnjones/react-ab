import React, {Component} from 'react';

/**
 * Defines the <tr> elements that comprise an EntryTable.
 * @return {JSX.Element}
 */
class EntryRow extends Component {
  // eslint-disable-next-line require-jsdoc
  render() {
    return (
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john.doe@email.com</td>
        <td>(555) 555-5555</td>
        <td>1234 Maple Street</td>
        <td>Los Angeles</td>
        <td>CA</td>
        <td>90210</td>
        <td>
          <span className="date">4/3/2020</span>
          <span className="time">11:12:55 PM</span>
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

export default EntryRow;
