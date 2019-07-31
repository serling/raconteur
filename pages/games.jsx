import React from 'react';
import Error from 'next/error';
import { server } from '../js/server';

import ArticleTemplate from '../components/article-template/article-template';
import WithPageTransition from '../components/with-page-transition/with-page-transitions';

const Games = ({ data, error }) => {
  if (error) {
    return <Error statusCode="Request Error" />;
  }

  return (
    <WithPageTransition>
      <ArticleTemplate data={data} />
    </WithPageTransition>
  );
};

Games.getInitialProps = async ctx => {
  const { res } = ctx;

  const endpoint = `${server + `/api/games`}`;
  const response = await fetch(endpoint);

  const data = await response.json();

  if (data.error && res) {
    res.statusCode = 404;
  }

  return { data };
};

export default Games;
