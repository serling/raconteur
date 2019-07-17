import React from 'react';
import Error from 'next/error';

import RequestService from '../js/RequestService';
import Article from '../components/article/article';
import WithPageTransition from '../components/with-page-transition/with-page-transitions';

import '../scss/global.scss';

class ArticlePage extends React.Component {
  static async getInitialProps(ctx) {
    let error;
    let data;

    await RequestService.get('/static/api/on-article-page.json', ctx.query.id)
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
        <Article data={this.props.data} />
      </WithPageTransition>
    );
  }
}

export default ArticlePage;
