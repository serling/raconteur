import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../layout/layout';
import ArticleTop from '../article-top/article-top';
import ArticleImage from '../article-image/article-image';
import ArticleBody from '../article-body/article-body';
import ArticleHeading from '../article-heading/article-heading';

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

    const {
      pageTitle,
      articleTop,
      articleBody,
      articleImage,
      articleHeading
    } = this.props.data;

    return (
      <Layout title={pageTitle}>
        <ArticleTop {...articleTop} />
        <ArticleBody {...articleBody} />
        <ArticleImage {...articleImage} />
        <ArticleHeading {...articleHeading} />
        <ArticleBody {...articleBody} />
      </Layout>
    );
  }
}

export default ArticlePage;
