import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// import Heading from '../heading/heading';
import Text from '../text/text';
import Link from '../link/link';
import Route from 'next/link';
// import Modal from '../modal/modal';

const Game = ({
  id,
  name,
  slug,
  href,
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
      <Route href="/games/[slug]" as={`/games/${slug}`}>
        <a>{name}</a>
      </Route>
      <Text text={abstract}></Text>
      {/* <Modal
        onClose={() => {}}
        isVisible={false}
        isCloseable={true}
        contentLabel={name}
        theme={Modal.themes.menu}
      >
        {name}
      </Modal> */}
    </div>
  );
};

Game.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  alternativeNames: PropTypes.array,
  playerCount: PropTypes.string,
  abstract: PropTypes.string,
  description: PropTypes.string,
  notes: PropTypes.string,
  tags: PropTypes.array,
  playerLevel: PropTypes.string
};

export default Game;
