import React from 'react';
import { server } from '../../js/server';

import Error from 'next/error';
import ArticlePageContent from '../../components/article-page/article-page';
import WithPageTransition from '../../components/with-page-transition/with-page-transitions';

import '../../scss/global.scss';

const ArticlePage = props => {
  const { data } = props;

  if (data.error) return <Error statusCode={404} />;

  return (
    <WithPageTransition>
      <ArticlePageContent data={data} />
    </WithPageTransition>
  );
};

ArticlePage.getInitialProps = async ctx => {
  const { query, res, req } = ctx;

  const endpoint = `${server + `/api/articles/${query.id}`}`;
  const response = await fetch(endpoint);

  const data = await response.json();

  return { data };
};

export default ArticlePage;
