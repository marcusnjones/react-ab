import React, { Component } from 'react';
import { HeaderContainer, HeaderContainerLabel } from '../components/styles/HeaderStyle';

class SearchBar extends Component {
  render() {
    return (
      <HeaderContainer>
        <HeaderContainerLabel htmlFor="entry-search">Search:&nbsp;</HeaderContainerLabel>
        <input id="entry-search" type="search" name="entry-search" autoFocus placeholder="Search for an entry…" />
      </HeaderContainer>
    );
  }
}

export default SearchBar;
