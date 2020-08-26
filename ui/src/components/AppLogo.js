import React, { Component } from 'react';
import Link from 'next/link';

class AppLogo extends Component {
  render() {
    return (
      <div className="logo-container">
        <Link href="/">
          <h2 className="logo">react-ab</h2>
        </Link>
      </div>
    );
  }
}

export default AppLogo;
