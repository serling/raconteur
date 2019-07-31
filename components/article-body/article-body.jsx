import React from 'react';

import PageContent from '../page-content/page-content';
import ParagraphWithImage from '../paragraph-with-image/paragraph-with-image';

const ArticleBody = props => {
  return (
    <PageContent theme={PageContent.themes.narrow}>
      <ParagraphWithImage {...props} />
    </PageContent>
  );
};

export default ArticleBody;
