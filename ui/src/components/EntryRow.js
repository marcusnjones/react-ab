import React, { Component } from 'react';
import '../App.css';

class EntryRow extends Component {
  // constructor(props) {
  //   super(props);
  // }

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
        <td>4/3/2020, 11:12:55 PM</td>
        <td>
          <ul className="action-list">
            <li>Edit</li>
            <li>Favorite</li>
            <li>Delete</li>
          </ul>
        </td>
      </tr>
      // <tr>
      //   <td>Jane</td>
      //   <td>Doe</td>
      //   <td>jane.doe@email.com</td>
      //   <td>(666) 666-6666</td>
      //   <td>4567 Peanut Street</td>
      //   <td>New York</td>
      //   <td>NY</td>
      //   <td>10011</td>
      //   <td>4/3/2020, 11:12:55 PM</td>
      //   <td>
      //     <ul className="action-list">
      //       <li>Edit</li>
      //       <li>Favorite</li>
      //       <li>Delete</li>
      //     </ul>
      //   </td>
      // </tr>
    );
  }
}

export default EntryRow;
