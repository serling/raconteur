import React from 'react';
import PropTypes from 'prop-types';

import GamesList from '../games-list/games-list';
import PageContent from '../page-content/page-content';

const RelatedGames = props => {
  return (
    <PageContent>
        <GamesList {...props} />
    </PageContent>
  );
};

RelatedGames.propTypes = {
  games: PropTypes.array
};

RelatedGames.defaultProps = {
  games: []
};

export default RelatedGames;
