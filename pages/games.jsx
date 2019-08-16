import React from 'react';
import Error from 'next/error';

import FilteredGamesList from '../components/filtered-games-list/filtered-games-list';
import Layout from '../components/layout/layout';
import WithPageTransition from '../components/with-page-transition/with-page-transitions';

import { getInitialData } from '../js/api-helper';

const Games = props => {
  const { data, error } = props;

  if (error) return <Error {...error} />;

  return (
    <WithPageTransition>
      <Layout title="games page">
        <FilteredGamesList games={data} />
      </Layout>
    </WithPageTransition>
  );
};

Games.getInitialProps = async ctx => {
  const { req, query } = ctx;

  const { payload, error } = await getInitialData(req, '/api/games', undefined, query);

  return { data: payload, error };
};

export default Games;
