import React from 'react';
import absoluteUrl from '../../js/absoluteUrl';
import fetch from 'isomorphic-unfetch';

import Error from 'next/error';
import ArticleTemplate from '../../components/article-template/article-template';
import WithPageTransition from '../../components/with-page-transition/with-page-transitions';

const ArticlePage = props => {
  const { data } = props;

  if (data.error) return <Error statusCode={404} />;

  return (
    <WithPageTransition>
      <ArticleTemplate data={data} />
    </WithPageTransition>
  );
};

ArticlePage.getInitialProps = async ctx => {
  const { query, res, req } = ctx;

  const { protocol, host } = absoluteUrl(req);

  const endpoint = `${protocol}//${host}/api/articles/${query.id}`;
  const response = await fetch(endpoint);

  const data = await response.json();

  return { data };
};

export default ArticlePage;
