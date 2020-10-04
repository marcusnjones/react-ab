import React, { Component } from 'react';
import Link from 'next/link';
import { HeaderContainer, Logo } from '../components/styles/HeaderStyle';

class AppLogo extends Component {
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
