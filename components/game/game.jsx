import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// import Heading from '../heading/heading';
import Text from '../text/text';
import Label from '../label/label';
import List from '../list/list';
import Route from 'next/link';
// import Modal from '../modal/modal';

const Game = ({
  id,
  title,
  slug,
  playerCount,
  abstract,
  description,
  notes,
  categories,
  playerLevel
}) => {
  return (
    <>
      <div className="game">
        <ul className="remove-list-styles game__list">
          {categories.map(category => {
            const { title, id } = category;

            return (
              <li key={id} className="game__item">
                <Label text={title} />
              </li>
            );
          })}
        </ul>

        <Route href="/games/[slug]" as={`/games/${slug}`}>
          <a className="remove-link-styles">
            <Text text={title} theme={Text.themes.lead} />
            <Text text={abstract} theme={Text.themes.small} />
          </a>
        </Route>
        {/* <Modal
        onClose={() => {}}
        isVisible={false}
        isCloseable={true}
        contentLabel={title}
        theme={Modal.themes.menu}
      >
        {title}
      </Modal> */}
      </div>
      <style jsx>{`
        .game {
          &__item {
            display: inline-block;
            margin-right: 0.5rem;

            &:last-child {
              margin-right: 0;
            }
          }
        }
      `}</style>
    </>
  );
};

Game.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  playerCount: PropTypes.string,
  abstract: PropTypes.string,
  description: PropTypes.string,
  notes: PropTypes.string,
  categories: PropTypes.array,
  playerLevel: PropTypes.string
};

export default Game;
