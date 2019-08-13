import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../layout/layout';
import PageTitle from '../page-title/page-title';
import SuggestionGenerator from '../suggestion-generator/suggestion-generator';

class SuggestionsPage extends React.Component {
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
    const { pageTitle, title, endpoint } = this.props;

    if (!this.state.hasLoaded) return null;

    return (
      <Layout title={pageTitle}>
        <PageTitle text={title} />
        <SuggestionGenerator endpoint={endpoint} />
      </Layout>
    );
  }
}

SuggestionsPage.propTypes = {
  pageTitle: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default SuggestionsPage;
