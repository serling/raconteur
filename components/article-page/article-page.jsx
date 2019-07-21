import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../layout/layout';
import DynamicContent from '../dynamic-content/dynamic-content';

class ArticlePage extends React.Component {
  static propTypes = {
    data: PropTypes.object
  };

  static pageTransitionDelayEnter = true;

  state = {
    hasLoaded: false
  };

  componentDidMount() {
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

    const { pageTitle } = this.props.data;

    return (
      <Layout title={pageTitle}>
        <DynamicContent {...this.props.data} />
      </Layout>
    );
  }
}

export default ArticlePage;
