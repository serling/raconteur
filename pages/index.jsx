import React from 'react';
import RequestService from '../js/RequestService';

import FrontPage from '../components/front-page/front-page';
import WithPageTransition from '../components/with-page-transition/with-page-transitions';

import '../scss/global.scss';

class Index extends React.Component {
  static async getInitialProps(ctx) {
    let data;
    let error;

    await RequestService.get('/static/api/on-front-page.json')
      .then(response => {
        data = response;
      })
      .catch(error => {
        error = error;
      });

    return { data, error };
  }

  render() {
    // if (this.props.error) {
    //   return <Error statusCode="Request Error" />;
    // }

    // if (!this.props.data) {
    //   return <Error statusCode="Missing Data" />;
    // }

    return (
      <WithPageTransition>
        <FrontPage {...this.props.data} />
      </WithPageTransition>
    );
  }
}

export default Index;
