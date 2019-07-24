import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import Layout from '../layout/layout';
import PageLoader from '../page-loader/page-loader';
import DynamicContent from '../dynamic-content/dynamic-content';

class ArticleTemplate extends React.Component {
  static propTypes = {
    data: PropTypes.object
  };

  static pageTransitionDelayEnter = true;

  state = {
    hasLoaded: false
  };

  componentWillUnmount() {
    Router.events.off('routeChangeStart');
  }

  componentDidMount() {
    Router.events.on('routeChangeStart', url => {
      console.log(`Loading: ${url}`);
    });

    this.setState(
      {
        hasLoaded: true
      },
      () => {
        this.props.pageTransitionReadyToEnter();
      }
    );
  }

  render() {
    if (!this.state.hasLoaded) return null;
    // if (!this.state.hasLoaded) return <PageLoader />;

    const { pageTitle } = this.props.data;

    return (
      <Layout title={pageTitle}>
        <DynamicContent {...this.props.data} />
      </Layout>
    );
  }
}

export default ArticleTemplate;
