import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

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
        <div className="article-top">
          <div className="article-top__heading">
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
          {lead && (
            <div
              className={cn('article-top__lead', {
                'article-top__lead--overlap': headingShouldOverlapImage
              })}
            >
              <Text text={lead} theme={Text.themes.lead} />
            </div>
          )}
        </div>
      </PageContent>
    </>
  );
};

ArticleTop.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  lead: PropTypes.string,
  image: PropTypes.object,
  headingShouldOverlapImage: PropTypes.bool
};

export default ArticleTop;
