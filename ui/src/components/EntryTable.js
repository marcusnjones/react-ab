import React, { Component } from 'react';
import EntryRow from './EntryRow';
import Table from '../components/styles/EntryTableStyle';

class EntryTable extends Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone #</th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">ZIP</th>
            <th scope="col">Updated</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <EntryRow />
        </tbody>
      </Table>
    );
  }
}

export default EntryTable;
