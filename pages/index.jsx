import React from 'react';
import { server } from '../js/server';

import FrontPage from '../components/front-page/front-page';
import WithPageTransition from '../components/with-page-transition/with-page-transitions';

import '../scss/global.scss';

const Index = ({ data }) => {
  return (
    <WithPageTransition>
      <FrontPage {...data} />
    </WithPageTransition>
  );
};

Index.getInitialProps = async ctx => {
  const endpoint = `${server + '/api/index'}`;

  const response = await fetch(endpoint);
  const data = await response.json();

  return { data };
};

export default Index;
