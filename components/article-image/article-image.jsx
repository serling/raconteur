import React from 'react';

import Image from '../image/image';
import PageContent from '../page-content/page-content';

const ArticleImage = props => {
  return (
    <PageContent theme={PageContent.themes.wide}>
      <Image
        {...props}
        enforceAspectRatio={true}
        theme={Image.themes.centerpiece}
      />
    </PageContent>
  );
};

export default ArticleImage;
