import SearchBar from './SearchBar';
import AppLogo from './AppLogo';
import {AppHeader} from '../components/styles/HeaderStyle';
import React from 'react';

const Header = () => (
  <AppHeader>
    <SearchBar />
    <AppLogo />
  </AppHeader>
);

export default Header;
