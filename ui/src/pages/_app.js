import App from 'next/app';
import Page from '../components/Page';
import GlobalStyle from '../components/styles/GlobalStyle'

class ReactAb extends App {
  render() {
    const { Component } = this.props;

    return (
      <Page>
        <GlobalStyle />
        <Component />
      </Page>
    );
  }
}

export default ReactAb;
