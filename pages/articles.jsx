import React from 'react';
import absoluteUrl from '../js/absoluteUrl';
import fetch from 'isomorphic-unfetch';

import Error from 'next/error';
import ArticleTemplate from '../components/article-template/article-template';
import WithPageTransition from '../components/with-page-transition/with-page-transitions';

const Articles = props => {
  const { data } = props;

  if (data.error)
    return (
      <Error
        title={data.error.message || 'generic error message'}
        statusCode={404}
      />
    );

  return (
    <WithPageTransition>
      <ArticleTemplate data={data} />
    </WithPageTransition>
  );
};

Articles.getInitialProps = async ctx => {
  const { res, req } = ctx;

  const { protocol, host } = absoluteUrl(req);

  const endpoint = `${protocol}//${host}/api/articles`;
  const response = await fetch(endpoint);

  const data = await response.json();

  return { data };
};

export default Articles;
