import App from 'next/app';
import{ ApolloProvider } from 'react-apollo';
import Page from '../components/Page';
import GlobalStyle from '../components/styles/GlobalStyle';
import withData from '../lib/withData';

class ReactAb extends App {
  render() {
    const { Component, apollo } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <Page>
          <GlobalStyle />
          <Component />
        </Page>
      </ApolloProvider>
    );
  }
}

export default withData(ReactAb);
