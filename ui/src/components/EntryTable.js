import React from 'react';
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
      phone
      address
      city
      state
      zip
    }
  }
`;

/**
 * Defines the function that displays entries.
 * @return {EntryRow}
 */
function displayEntries() {
  const {loading, error, data} = useQuery(ALL_ITEMS_QUERY);

  if (loading) return <tr><td colSpan="10">Loading...</td></tr>;
  if (error) return <tr><td colSpan="10">Error! {error.message}</td></tr>;
  if (data === undefined) return <tr><td colSpan="10">Undefined!</td></tr>;

  return (
    data.entries.map((entry) => {
      return (
        <EntryRow
          key={entry._id}
          _dateCreated={Date(entry._dateCreated)}
          dateUpdated={Date(entry.dateUpdated)}
          firstName={entry.firstName}
          lastName={entry.lastName}
          email={entry.email}
          phone={entry.phone}
          address={entry.address}
          city={entry.city}
          state={entry.state}
          zip={Number(entry.zip)}
        />
      );
    })
  );
}

/**
 * Defines the class that represents the table that contains entries.
 * @return {StyledComponent}
 */
function EntryTable() {
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
        {displayEntries()}
      </tbody>
    </Table>
  );
}

export default EntryTable;
