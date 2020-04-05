import React, { Component } from 'react';
import '../App.css';

class SearchBar extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="search-container">
        <label htmlFor="entry-search">Search:&nbsp;</label>
        <input id="entry-search" type="search" name="entry-search" autoFocus placeholder="Search for an entry…" />
      </div>
    );
  }
}

export default SearchBar;
