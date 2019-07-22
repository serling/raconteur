import React from 'react';
import PropTypes from 'prop-types';

import PageContent from '../page-content/page-content';
import ChapterHeading from '../chapter-heading/chapter-heading';
import Text from '../text/text';

import './article-top.scss';

const ArticleTop = ({
  title,
  subtitle,
  lead,
  image,
  headingShouldOverlapImage
}) => {
  return (
    <>
      <PageContent theme={PageContent.themes.wide}>
        <ChapterHeading
          title={title}
          subtitle={subtitle}
          image={image}
          theme={
            headingShouldOverlapImage
              ? ChapterHeading.themes.overlap
              : undefined
          }
        />
      </PageContent>
      <PageContent theme={PageContent.themes.narrow}>
        <Text text={lead} theme={Text.themes.lead} />
      </PageContent>
    </>
  );
};

ArticleTop.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  lead: PropTypes.string,
  image: PropTypes.object.isRequired,
  headingShouldOverlapImage: PropTypes.bool
};

export default ArticleTop;
