import React from 'react';

import RichText from '../rich-text/rich-text';
import PageContent from '../page-content/page-content';

import './article-body.scss';

const ArticleBody = props => {
  return (
    <PageContent theme={PageContent.themes.narrow}>
      <RichText {...props} />
    </PageContent>
  );
};

export default ArticleBody;
