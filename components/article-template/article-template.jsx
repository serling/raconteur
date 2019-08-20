import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../layout/layout';
import ArticleTop from '../article-top/article-top';
import Blocks from '../dynamic-content/blocks';

class ArticleTemplate extends React.Component {
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

    const { pageTitle, title, image, body } = this.props.data;

    return (
      <Layout title={pageTitle}>
        <ArticleTop title={title} image={image} />
        <Blocks body={body} />
      </Layout>
    );
  }
}

export default ArticleTemplate;
