import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../layout/layout';

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

    return <Layout title={this.props.data.pageTitle}>article</Layout>;
  }
}

export default Article;
