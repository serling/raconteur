import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../layout/layout';
import Blocks from '../dynamic-content/blocks';
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

    const {
      pageTitle,
      type,
      title,
      relatedGames,
      image,
      body,
      abstract,
      categories
    } = this.props.data;

    return (
      <Layout title={pageTitle}>
        <GameTop
          label={type}
          title={title}
          lead={abstract}
          highlightString={abstract}
          image={image}
          categories={categories}
        />
        <Blocks body={body} />
        <RelatedGames games={relatedGames} />
      </Layout>
    );
  }
}

export default GameTemplate;
