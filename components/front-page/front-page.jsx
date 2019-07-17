import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../layout/layout';
import PageTitle from '../page-title/page-title';

class FrontPage extends React.Component {
  static pageTransitionDelayEnter = true;

  state = { hasLoaded: false };

  componentDidMount() {
    console.log(this.props);
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
      <Layout title={this.props.pageTitle}>
        <PageTitle text={this.props.title} />
      </Layout>
    );
  }
}

FrontPage.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  latestArticles: PropTypes.array.isRequired,
  initialMessage: PropTypes.object
};

FrontPage.defaultProps = {
  latestArticles: []
};

export default FrontPage;
