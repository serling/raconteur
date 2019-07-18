import React from 'react';
import PropTypes from 'prop-types';

import './game.scss';

const Game = ({
  id,
  name,
  alternativeNames,
  playerCount,
  abstract,
  description,
  notes,
  tags,
  playerLevel
}) => {
  return <div>hello</div>;
};

Game.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  alternativeNames: PropTypes.array,
  playerCount: PropTypes.string,
  abstract: PropTypes.string,
  description: PropTypes.string,
  notes: PropTypes.string,
  tags: PropTypes.array,
  playerLevel: PropTypes.string
};

export default Game;