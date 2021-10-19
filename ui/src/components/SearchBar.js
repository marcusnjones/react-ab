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
  /**
   * Clears the search input when esc is hit.
   */
  clearSearch() {
    const search = document.getElementById('entry-search');
    search.onkeyup = (e) => {
      if (e.key === 'Escape') search.value = '';
    };
  }

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
          autoFocus
          onKeyUp={this.clearSearch}
        />
      </HeaderContainer>
    );
  }
}

export default SearchBar;
