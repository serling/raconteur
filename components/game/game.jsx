import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Heading from '../heading/heading';
import Text from '../text/text';
import Modal from '../modal/modal';

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
  return (
    <div className="game">
      <Heading>{name}</Heading>
      <Text text={abstract}></Text>
      <Modal
        onClose={() => {}}
        isVisible={false}
        isCloseable={true}
        contentLabel={name}
        theme={Modal.themes.menu}
      >
        {name}
      </Modal>
    </div>
  );
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
