import React from 'react';
import RequestService from '../js/RequestService';

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
  const response = await fetch('http://localhost:3000/api/index');
  const data = await response.json();

  return { data };
};

export default Index;
