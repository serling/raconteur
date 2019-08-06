import React from 'react';
import absoluteUrl from '../../js/absoluteUrl';
import fetch from 'isomorphic-unfetch';

import Error from 'next/error';
import GameTemplate from '../../components/game-template/game-template';
import WithPageTransition from '../../components/with-page-transition/with-page-transitions';

const GamePage = props => {
  const { data } = props;

  if (data.error) return <Error statusCode={404} />;

  return (
    <WithPageTransition>
      <GameTemplate data={data} />
    </WithPageTransition>
  );
};

GamePage.getInitialProps = async ctx => {
  const { query, res, req } = ctx;

  const { protocol, host } = absoluteUrl(req);

  const endpoint = `${protocol}//${host}/api/games/${query.id}`;
  const response = await fetch(endpoint);

  const data = await response.json();

  if (data.error && res) {
    res.statusCode = 404;
  }

  return { data };
};

export default GamePage;
