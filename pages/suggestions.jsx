import React from 'react';
import Error from 'next/error';

import SuggestionsPage from '../components/suggestions-page/suggestions-page';
import WithPageTransition from '../components/with-page-transition/with-page-transitions';

import { getInitialData } from '../js/api-helper';

const Suggestions = props => {
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
      <SuggestionsPage {...data} />
    </WithPageTransition>
  );
};

Suggestions.getInitialProps = async ctx => {
  const { req } = ctx;

  const { payload, error } = await getInitialData(
    req,
    '/api/suggestions'
  );

  return { data: payload, error };
};

export default Suggestions;
