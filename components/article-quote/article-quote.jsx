import React from 'react';
import PropTypes from 'prop-types';

import PageContent from '../page-content/page-content';
import Quote from '../quote/quote';

import './article-quote.scss';

const ArticleQuote = ({ quote }) => (
  <PageContent
    backgroundColor={PageContent.colors.grey}
    theme={PageContent.themes.narrow}
  >
    <div className="article-quote">
      <Quote
        {...quote}
        textIsWhite={true}
        showQuoteMark={true}
        backgroundColor={Quote.backgroundColors.grey}
      />
    </div>
  </PageContent>
);

ArticleQuote.propTypes = {
  quote: PropTypes.object.isRequired
};

export default ArticleQuote;
