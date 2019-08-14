import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../layout/layout';
import DynamicContent from '../dynamic-content/dynamic-content';
import GameTop from '../game-top/game-top';

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

    const { pageTitle, header } = this.props.data;

    return (
      <Layout title={pageTitle}>
        {header && <GameTop {...header} label='Game' highlightString={"<i>Teacher's note: this game is a great warmup together with <a href='/games/freeze'>freeze tag</a>.</i>"} />}
        <DynamicContent {...this.props.data} />
        article grid
        next game, freeze tag ->
      </Layout>
    );
  }
}

export default GameTemplate;
