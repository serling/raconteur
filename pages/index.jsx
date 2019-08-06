import React from 'react';
import Error from 'next/error';

import { getInitialData } from '../js/api-helper';
import FrontPage from '../components/front-page/front-page';
import WithPageTransition from '../components/with-page-transition/with-page-transitions';

const Index = props => {
  const { data, error } = props;

  if (error) return <Error {...error} />;

  return (
    <WithPageTransition>
      <FrontPage {...data} />
    </WithPageTransition>
  );
};

Index.getInitialProps = async ctx => {
  const { req } = ctx;

  const { payload, error } = await getInitialData(req, '/api/home');

  return { data: payload, error };
};

export default Index;
