import React from 'react';
import { server } from '../../js/server';
import fetch from 'isomorphic-unfetch';

import Error from 'next/error';
import ArticleTemplate from '../../components/article-template/article-template';
import WithPageTransition from '../../components/with-page-transition/with-page-transitions';

import '../../scss/global.scss';

const GamesIndex = props => {
  const { data } = props;

  if (data.error) return <Error statusCode={data.error.message} />;

  return (
    <WithPageTransition>
      <ArticleTemplate data={data} />
    </WithPageTransition>
  );
};

GamesIndex.getInitialProps = async ctx => {
  const { res } = ctx;

  const endpoint = `${server + `/api/games/index`}`;
  const response = await fetch(endpoint);

  const data = await response.json();

  if (data.error && res) {
    res.statusCode = 404;
  }

  return { data };
};

export default GamesIndex;
