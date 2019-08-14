import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../layout/layout';
import PageTitle from '../page-title/page-title';
import ArticlesGrid from '../articles-grid/articles-grid';

class FrontPage extends React.Component {
  static pageTransitionDelayEnter = true;

  state = { hasLoaded: false };

  //TODO: design - https://css-tricks.com/snippets/css/complete-guide-grid/

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
        <ArticlesGrid articles={articles} />
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
