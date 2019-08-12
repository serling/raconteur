import React from 'react';
import PropTypes from 'prop-types';
import Route from 'next/link';
import cn from 'classnames';

import Image from '../image/image';
import Label from '../label/label';

const themes = {
  vertical: 'vertical',
  overlay: 'overlay',
  horizontal: 'horizontal'
};

const Article = ({ title, lead, image, type, slug, theme }) => (
  <>
    <div
      className={cn('article', {
        [`article--${themes[theme]}`]: themes[theme]
      })}
    >
      <Route href="/articles/[slug]" as={`/articles/${slug}`}>
        <a className="article__link remove-link-styles">
          <div className="article__content">
            <div className="article__image">
              <Image {...image} enforceAspectRatio={true} />
            </div>
            <div className="article__text-wrapper">
              <div className="article__text">
                {type && <Label text={type} />}
                <div className="article__title">{title}</div>
                {lead && <div className="article__lead">{lead}</div>}
              </div>
            </div>
          </div>
        </a>
      </Route>
    </div>
    <style jsx>{`
      .article {
        position: relative;

        &__link {
          &:hover,
          &:focus {
            .article__title {
              text-decoration: underline;
            }
          }
        }

        &__text-wrapper {
          display: flex;
          align-items: flex-end;
        }

        &__text {
          padding: 0 1rem;
          bottom: 0;
          width: 100%;
          color: #000000;
        }

        &__title {
          font-size: 1rem;
        }

        &__lead {
          font-size: 0.6rem;
          line-height: 1;
        }

        &--horizontal {
          .article__content {
            display: flex;
            align-items: flex-start;
          }

          .article__image {
            flex: 0 0 60%;
          }

          .article__title {
            margin-top: 0.5rem;
            font-size: 2rem;
          }

          .article__lead {
            margin-top: 0.5rem;
            font-size: 1rem;
            line-height: inherit;
          }
        }

        &--vertical {
          .article__text-wrapper {
            margin-top: -1rem;
          }

          .article__image {
            z-index: -1;
          }

          .article__text {
            z-index: 1;
          }
        }

        &--overlay {
          .article__text-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }

          .article__text {
            color: #ffffff;
            margin-bottom: 1rem;
          }
        }
      }
    `}</style>
  </>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  slug: PropTypes.string.isRequired,
  lead: PropTypes.string,
  image: PropTypes.object
};

Article.defaultProps = {
  theme: themes.vertical
};

Article.themes = themes;

export default Article;
