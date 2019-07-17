import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../layout/layout';
import ArticleTop from '../article-top/article-top';
import ArticleImage from '../article-image/article-image';
import ArticleBody from '../article-body/article-body';

class Article extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    user: PropTypes.object
  };

  static defaultProps = {
    data: {},
    user: {}
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

    return (
      <Layout title={this.props.data.pageTitle}>
        <ArticleTop {...this.props.data.articleTop} />
        <ArticleBody {...this.props.data.articleBody} />
        <ArticleImage {...this.props.data.articleImage} />
        <ArticleBody {...this.props.data.articleBody} />
      </Layout>
    );
  }
}

export default Article;
