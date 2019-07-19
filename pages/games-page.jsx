import React from 'react';
import Error from 'next/error';

import RequestService from '../js/RequestService';
import GamesPageContent from '../components/games-page/games-page';
import WithPageTransition from '../components/with-page-transition/with-page-transitions';

import '../scss/global.scss';

const GamesPage = ({ data, error }) => {
  if (error) {
    return <Error statusCode="Request Error" />;
  }

  if (!data) {
    return <Error statusCode="Missing Data" />;
  }

  return (
    <WithPageTransition>
      <GamesPageContent data={data} />
    </WithPageTransition>
  );
};

GamesPage.getInitialProps = async ctx => {
  let error;
  let data;

  await RequestService.get('/static/data/on-games-page.json')
    .then(response => {
      data = response;
    })
    .catch(error => {
      error = error;
    });

  return { data, error };
};

export default GamesPage;
