import React from 'react';
import Error from 'next/error';

import RequestService from '../js/RequestService';
import GamesPageContent from '../components/games-page/games-page';
import WithPageTransition from '../components/with-page-transition/with-page-transitions';

import '../scss/global.scss';

class GamesPage extends React.Component {
  static async getInitialProps(ctx) {
    let error;
    let data;

    await RequestService.get('/static/api/on-games-page.json')
      .then(response => {
        data = response;
      })
      .catch(error => {
        error = error;
      });

    return { data, error };
  }

  render() {
    if (this.props.error) {
      return <Error statusCode="Request Error" />;
    }

    if (!this.props.data) {
      return <Error statusCode="Missing Data" />;
    }

    return (
      <WithPageTransition>
        <GamesPageContent data={this.props.data} />
      </WithPageTransition>
    );
  }
}

export default GamesPage;
