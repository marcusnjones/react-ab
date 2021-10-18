import React, {Component} from 'react';
import {
  HeaderContainer,
  HeaderContainerLabel,
} from '../components/styles/HeaderStyle';

/**
 * Defines the class that represents the elements that comprise the search bar.
 * @return {JSX.Element}
 */
class SearchBar extends Component {
  // eslint-disable-next-line require-jsdoc
  render() {
    return (
      <HeaderContainer>
        <HeaderContainerLabel
          htmlFor="entry-search">Search:&nbsp;</HeaderContainerLabel>
        <input
          id="entry-search"
          type="search"
          name="entry-search"
          placeholder="Search for an entry..."
          autoFocus />
      </HeaderContainer>
    );
  }
}

export default SearchBar;
