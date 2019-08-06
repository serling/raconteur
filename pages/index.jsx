import React from 'react';
import absoluteUrl from '../js/absoluteUrl';
import fetch from 'isomorphic-unfetch';

import FrontPage from '../components/front-page/front-page';
import WithPageTransition from '../components/with-page-transition/with-page-transitions';

const Index = props => {
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
      <FrontPage {...data} />
    </WithPageTransition>
  );
};

Index.getInitialProps = async ctx => {
  const { req, res } = ctx;

  const { protocol, host } = absoluteUrl(req);

  const endpoint = `${protocol}//${host}/api/home`;
  const response = await fetch(endpoint);
  const data = await response.json();

  return { data };
};

export default Index;
