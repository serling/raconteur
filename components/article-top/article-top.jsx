import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

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
            <Lead
              lead={lead}
              headingShouldOverlapImage={headingShouldOverlapImage}
            />
          )}
        </div>
      </PageContent>
    </>
  );
};

const Lead = ({ lead, headingShouldOverlapImage }) => {
  return (
    <>
      <div
        className={cn('article-lead', {
          'article-lead--overlap': headingShouldOverlapImage
        })}
      >
        <Text text={lead} theme={Text.themes.lead} />
      </div>
      <style jsx>
        {`
          $break-at-md: 50rem;

          .article-lead {
            max-width: 768px;
            margin: 2rem auto 0 auto;
          }

          .article-lead--overlap {
            margin-top: 1rem;
          }

          @media screen and (min-width: $break-at-md) {
            .article-lead--overlap {
              padding: 0.5rem 0 0 1rem;
              margin-top: -2.5rem;
              background-color: white;
            }
          }

          @media screen and (min-width: $break-at-md) {
            .article-lead {
              padding: 0 1rem;
            }
          }
        `}
      </style>
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
