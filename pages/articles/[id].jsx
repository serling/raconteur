import React from 'react';
import { server } from '../../js/server';

import Error from '../_error';
import ArticlePageContent from '../../components/article-page/article-page';
import WithPageTransition from '../../components/with-page-transition/with-page-transitions';

import '../../scss/global.scss';

const ArticlePage = props => {
  const { data } = props;

  return (
    <WithPageTransition>
      <ArticlePageContent data={data} />
    </WithPageTransition>
  );
};

ArticlePage.getInitialProps = async ctx => {
  const { query } = ctx;

  const endpoint = `${server + `/api/articles/${query.id}`}`;
  const response = await fetch(endpoint);

  const data = await response.json();

  return { data };
};

export default ArticlePage;
