import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="app-header">
        <div className="search-container">
          <label htmlFor="entry-search">Search:&nbsp;</label>
          <input id="entry-search" type="search" name="entry-search" autoFocus />
        </div>

        <div className="logo-container">
          <h2 className="logo">react-ab</h2>
        </div>
      </header>

      <main className="app-body">
        <table id="entries">
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
            <tr>
              <td>Jane</td>
              <td>Doe</td>
              <td>jane.doe@email.com</td>
              <td>(666) 666-6666</td>
              <td>4567 Peanut Street</td>
              <td>New York</td>
              <td>NY</td>
              <td>10011</td>
              <td>4/3/2020, 11:12:55 PM</td>
              <td>
                <ul className="action-list">
                  <li>Edit</li>
                  <li>Favorite</li>
                  <li>Delete</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
