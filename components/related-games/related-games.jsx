import React from 'react';
import PropTypes from 'prop-types';

import GamesList from '../games-list/games-list';
import Heading from '../heading/heading';
import PageContent from '../page-content/page-content';

const RelatedGames = props => {
  return (
    <>
    <PageContent backgroundColor={PageContent.colors.grey}>
      <div className="related-games">
        <Heading text='How about some related stuff?' />
        <div className="related-games__list">
        <GamesList {...props} />
        </div>
      </div>
    </PageContent>
    <style jsx>
      {`
        .related-games {
          &__list {
            margin-top: 1rem;
          }
        }
      `}
    </style>
    </>
  );
};

RelatedGames.propTypes = {
  games: PropTypes.array
};

RelatedGames.defaultProps = {
  games: []
};

export default RelatedGames;
