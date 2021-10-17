import React, {Component} from 'react';
import Link from 'next/link';
import {HeaderContainer, Logo} from '../components/styles/HeaderStyle';

/**
 * Defines the class for the element that represents the logo.
 * @return {JSX.Element}
 */
class AppLogo extends Component {
  // eslint-disable-next-line require-jsdoc
  render() {
    return (
      <HeaderContainer>
        <Link href="/">
          <Logo>react-ab</Logo>
        </Link>
      </HeaderContainer>
    );
  }
}

export default AppLogo;
