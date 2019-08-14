import React from 'react';
import PropTypes from 'prop-types';

import PageContent from '../page-content/page-content';
import ChapterHeading from '../chapter-heading/chapter-heading';
import Text from '../text/text';

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
        <div className="article-top">
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
        </div>
      </PageContent>
      {lead && 
        <PageContent theme={PageContent.themes.narrow}>
          <Text text={lead} theme={Text.themes.lead} />
        </PageContent>
      }
    </>
  );
};

ArticleTop.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  lead: PropTypes.string,
  image: PropTypes.object
};

export default ArticleTop;
