import React from 'react';
import PropTypes from 'prop-types';

import List from '../list/list';
import Game from '../game/game';

const GamesList = ({ games }) => {
  return (
    <List>
      {games.map((game, index) => (
        <Game key={index} {...game} />
      ))}
    </List>
  );
};

GamesList.propTypes = {
  games: PropTypes.array.isRequired
};

GamesList.defaultProps = {
  games: []
};

export default GamesList;
