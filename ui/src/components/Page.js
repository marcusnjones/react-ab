import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import { AppContainer, Main } from '../components/styles/PageStyle';

class Page extends Component {
  render() {
    return (
      <AppContainer>
        <Meta />
        <Header />
        <Main>
          {this.props.children}
        </Main>
      </AppContainer>
    )
  }
}

export default Page;
