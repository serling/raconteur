import React from 'react';

import HeadingWithInfo from '../heading-with-info/heading-with-info';
import PageContent from '../page-content/page-content';

const ArticleHeading = props => (
  <PageContent
    theme={PageContent.themes.narrow}
    margin={PageContent.margins.small}
  >
    <div className="article-heading">
      <HeadingWithInfo {...props} />
    </div>
  </PageContent>
);

export default ArticleHeading;
