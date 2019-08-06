import React from 'react';
import Error from 'next/error';

import GameTemplate from '../../components/game-template/game-template';
import WithPageTransition from '../../components/with-page-transition/with-page-transitions';

import { getInitialData } from '../../js/api-helper';

const GamePage = props => {
  const { data, error } = props;

  if (error)
    return (
      <Error
        title={error.message || 'generic error message'}
        statusCode={404}
      />
    );

  return (
    <WithPageTransition>
      <GameTemplate data={data} />
    </WithPageTransition>
  );
};

GamePage.getInitialProps = async ctx => {
  const { query, req } = ctx;

  const initialData = await getInitialData(req, '/api/games', query.id);

  return { data: initialData };
};

export default GamePage;
