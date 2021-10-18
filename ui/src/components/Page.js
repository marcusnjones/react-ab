import React, {Component} from 'react';
import Header from './Header';
import Meta from './Meta';
import {AppContainer, Main} from '../components/styles/PageStyle';
import PropTypes from 'prop-types';

/**
 * Defines the class that represents a page in the app.
 * @return {JSX.Element}
 */
class Page extends Component {
  // eslint-disable-next-line require-jsdoc
  render() {
    return (
      <AppContainer>
        <Meta />
        <Header />
        <Main>
          {this.props.children}
        </Main>
      </AppContainer>
    );
  }
}
Page.propTypes = {
  children: PropTypes.array,
};

export default Page;
