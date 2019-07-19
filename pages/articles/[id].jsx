import React from 'react';
import { server } from '../../js/server';

import Error from '../_error';
import ArticlePageContent from '../../components/article-page/article-page';
import WithPageTransition from '../../components/with-page-transition/with-page-transitions';

import '../../scss/global.scss';

const ArticlePage = ({ data }) => {
  if (data.error) {
    return <Error statusCode={404} />;
  }

  return (
    <WithPageTransition>
      <ArticlePageContent data={data} />
    </WithPageTransition>
  );
};

ArticlePage.getInitialProps = async ({ res, query }) => {
  const endpoint = `${server + `/api/articles/${query.id}`}`;
  const response = await fetch(endpoint);
  const data = await response.json();

  if (data.error && res) {
    res.statusCode = 404;
  }

  return { data };
};

export default ArticlePage;
