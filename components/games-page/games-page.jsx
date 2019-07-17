import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../layout/layout';
import PageTitle from '../page-title/page-title';

class GamesPage extends React.Component {
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
    if (!this.state.hasLoaded) return null;

    const { pageTitle, title } = this.props.data;

    return (
      <Layout title={pageTitle}>
        <PageTitle text={title} />
      </Layout>
    );
  }
}

GamesPage.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default GamesPage;
