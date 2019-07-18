import React from 'react';
import PropTypes from 'prop-types';

import List from '../list/list';
import Game from '../game/game';

import './games-list.scss';

const GamesList = ({ games }) => {
  return (
    <div className="games-list">
      <List>
        {games.map((game, index) => (
          <Game key={index} {...game} />
        ))}
      </List>
    </div>
  );
};

GamesList.propTypes = {
  games: PropTypes.array.isRequired
};

GamesList.defaultProps = {
  games: []
};

export default GamesList;
