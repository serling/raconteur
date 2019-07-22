import React from 'react';

import RichText from '../rich-text/rich-text';
import PageContent from '../page-content/page-content';
import InlineImage from '../inline-image/inline-image';

import './article-body.scss';

const ArticleBody = ({ string, image, imageIsRight }) => {
  return (
    <PageContent theme={PageContent.themes.narrow}>
      {image && <InlineImage image={image} imageIsRight={imageIsRight} />}
      <RichText string={string} />
    </PageContent>
  );
};

export default ArticleBody;
