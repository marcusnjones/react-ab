import App from 'next/app';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink,
} from '@apollo/client';
import Page from '../components/Page';
import GlobalStyle from '../components/styles/GlobalStyle';
import fetch from 'cross-fetch';
import {onError} from '@apollo/client/link/error';
import React from 'react';

const apolloClient = new ApolloClient({
  link: ApolloLink.from([
    onError(({graphQLErrors, networkError}) => {
      if (graphQLErrors) {
        graphQLErrors.forEach(({message, locations, path}) =>
          console.log(
              // eslint-disable-next-line max-len
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      }
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: 'http://react-ab_api:8080/graphql', fetch,
      credentials: 'omit',
    }),
  ]),
  cache: new InMemoryCache(),
});

/**
 * Defines the class for the app.
 * @return {JSX.Element}
 */
class ReactAb extends App {
  // eslint-disable-next-line require-jsdoc
  render() {
    const {Component} = this.props;

    return (
      <ApolloProvider client={apolloClient}>
        <Page>
          <GlobalStyle />
          <Component />
        </Page>
      </ApolloProvider>
    );
  }
}

export default ReactAb;
