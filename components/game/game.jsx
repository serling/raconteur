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
    <>
    <div className="game">
      <Route href="/games/[slug]" as={`/games/${slug}`}>
        <a className="remove-link-styles">
          <Text text={name} />
          <Text text={abstract} />
        </a>
      </Route>
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
    <style jsx>{`
      .game {
        border: 2px solid black;
        padding: 1rem;
      }
      `}</style>
    </>
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
