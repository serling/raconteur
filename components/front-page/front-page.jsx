import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../layout/layout';
import PageTitle from '../page-title/page-title';
import ArticlesList from '../articles-list/articles-list';

class FrontPage extends React.Component {
  static pageTransitionDelayEnter = true;

  state = { hasLoaded: false };

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
    const { pageTitle, title, articles } = this.props;

    if (!this.state.hasLoaded) return null;

    return (
      <Layout title={pageTitle}>
        <PageTitle text={title} />
        <ArticlesList articles={articles} />
      </Layout>
    );
  }
}

FrontPage.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  articles: PropTypes.array.isRequired
};

FrontPage.defaultProps = {};

export default FrontPage;
