import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../layout/layout';
import PageTitle from '../page-title/page-title';
import ArticlesList from '../articles-list/articles-list';
import Grid from '../grid/grid';
import Article from '../articles-list/article';

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
        <ArticlesList articles={articles} />
        <Grid>
        {/* {articles.map(article => (
          <Article {...article} />
        ))} */}
          <div>hello</div>
          <div>I am block</div>
          <div>Third thing</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
        </Grid>
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
