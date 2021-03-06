import React from 'react';
import Error from 'next/error';

import ArticleTemplate from '../../components/article-template/article-template';
import WithPageTransition from '../../components/with-page-transition/with-page-transitions';

import { getInitialData } from '../../js/api-helper';

const SuggestionOnDemand = props => {
  const { data, error } = props;

  if (error)
    return (
      <Error
        title={error.message || 'generic error message'}
        statusCode={404}
      />
    );

  return (
    <WithPageTransition>
      <ArticleTemplate data={data} />
    </WithPageTransition>
  );
};

SuggestionOnDemand.getInitialProps = async ctx => {
  const { req } = ctx;

  const initialData = await getInitialData(
    req,
    '/api/utilities/suggestion-on-demand'
  );

  return { data: initialData };
};

export default SuggestionOnDemand;
