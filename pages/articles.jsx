import React from 'react';
import Error from 'next/error';

import WithPageTransition from '../components/with-page-transition/with-page-transitions';
import ArticlesList from '../components/articles-list/articles-list';
import Layout from '../components/layout/layout';

import { getInitialData } from '../js/api-helper';

const Articles = props => {
  const { data, error } = props;

  if (error) return <Error {...error} />;

  return (
    <WithPageTransition>
      <Layout title="articles page">
        <ArticlesList articles={data} />
      </Layout>
    </WithPageTransition>
  );
};

Articles.getInitialProps = async ctx => {
  const { req } = ctx;

  const { payload, error } = await getInitialData(req, '/api/articles');

  return { data: payload, error };
};

export default Articles;
