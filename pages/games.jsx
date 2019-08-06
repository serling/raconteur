import React from 'react';
import Error from 'next/error';

import ArticleTemplate from '../components/article-template/article-template';
import WithPageTransition from '../components/with-page-transition/with-page-transitions';

import { getInitialData } from '../js/api-helper';

const Games = props => {
  const { data, error } = props;

  if (error) return <Error {...error} />;

  return (
    <WithPageTransition>
      <ArticleTemplate data={data} />
    </WithPageTransition>
  );
};

Games.getInitialProps = async ctx => {
  const { req } = ctx;

  const { payload, error } = await getInitialData(req, '/api/games');

  return { data: payload, error };
};

export default Games;
