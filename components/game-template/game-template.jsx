import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../layout/layout';
import DynamicContent from '../dynamic-content/dynamic-content';
import GameTop from '../game-top/game-top';
import RelatedGames from '../related-games/related-games';

class GameTemplate extends React.Component {
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

    const { pageTitle, header, relatedGames } = this.props.data;

    return (
      <Layout title={pageTitle}>
        <GameTop {...header}/>
        <DynamicContent {...this.props.data} />
        <RelatedGames games={relatedGames}/>
      </Layout>
    );
  }
}

export default GameTemplate;
