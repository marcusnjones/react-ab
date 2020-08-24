import App from 'next/app';
import Page from '../components/Page';
import '../styles/App.css';

class ReactAb extends App {
  render() {
    const { Component } = this.props;

    return (
      <Page>
        <Component />
      </Page>
    );
  }
}

export default ReactAb;
