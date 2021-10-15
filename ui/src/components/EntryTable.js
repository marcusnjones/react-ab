import React, { Component } from 'react';
import EntryRow from './EntryRow';
import Table from '../components/styles/EntryTableStyle';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    entries {
      _id
      _dateCreated
      dateUpdated
      firstName
      lastName
      email
      address
      state
      zip
    }
  }
`;

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
          <Query query={ALL_ITEMS_QUERY}>
            {(payload) => {
              return <EntryRow />
            }}
          </Query>
        </tbody>
      </Table>
    );
  }
}

export default EntryTable;
