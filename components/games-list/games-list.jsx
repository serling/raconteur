import React from 'react';
import PropTypes from 'prop-types';

import List from '../list/list';
import Game from '../game/game';

const GamesList = ({ games }) => {
  return (
    <List>
      {games.map(game => {
        const { id } = game;
        return <Game key={id} {...game} />;
      })}
    </List>
  );
};

GamesList.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  ).isRequired
};

GamesList.defaultProps = {
  games: []
};

export default GamesList;
