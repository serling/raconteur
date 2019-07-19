import React from 'react';

import Error from '../_error';
import ArticlePageContent from '../../components/article-page/article-page';
import WithPageTransition from '../../components/with-page-transition/with-page-transitions';

import '../../scss/global.scss';

const ArticlePage = ({ data, status }) => {
  if (status === 404) {
    return <Error statusCode={404} />;
  }

  return (
    <WithPageTransition>
      <ArticlePageContent data={data} />
    </WithPageTransition>
  );
};

ArticlePage.getInitialProps = async ({ res, query }) => {
  const response = await fetch(
    `http://localhost:3000/api/articles/${query.id}`
  );
  const data = await response.json();

  if (data.error && res) {
    res.statusCode = 404;
  }

  return { data, status: response.status };
};

export default ArticlePage;
