import React from 'react';

import Image from '../image/image';
import PageContent from '../page-content/page-content';

import './article-image.scss';

const ArticleImage = props => {
  return (
    <PageContent>
      <Image {...props} enforceAspectRatio={true} />
    </PageContent>
  );
};

export default ArticleImage;
