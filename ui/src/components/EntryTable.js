import React, {Component} from 'react';
import EntryRow from './EntryRow';
import Table from '../components/styles/EntryTableStyle';
import {useQuery, gql} from '@apollo/client';

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

/**
 * Defines the class that represents the <table> that contains entries.
 * @return {JSX.Element}
 */
class EntryTable extends Component {
  /**
   * Defines the method that displays entries.
   * @return {EntryRow}
   */
  displayEntries() {
    const {loading, error, data} = useQuery(ALL_ITEMS_QUERY);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return <EntryRow data={data.entries} />;
  }

  // eslint-disable-next-line require-jsdoc
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
          {/* { this.displayEntries() } */}
        </tbody>
      </Table>
    );
  }
}

export default EntryTable;
