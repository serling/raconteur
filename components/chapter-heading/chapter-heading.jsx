import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Heading from '../heading/heading';
import Image from '../image/image';

const themes = {
  overlap: 'overlap'
};

const ChapterHeading = ({ title, subtitle, image, theme }) => (
  <>
    <div
      className={cn('chapter-heading', {
        'chapter-heading--subtitle': !!subtitle,
        [`chapter-heading--${themes[theme]}`]: themes[theme]
      })}
    >
      {image && (
        <div className="chapter-heading__image">
          <Image {...image} aspect={Image.aspects.wide} />
        </div>
      )}
      <div className="chapter-heading__text">
        <div className="chapter-heading__heading">
          <Heading level={1} text={title} theme={Heading.themes.headline} />
        </div>
        {subtitle && (
          <div className="chapter-heading__subtitle">
            <span>{subtitle}</span>
          </div>
        )}
      </div>
    </div>
    <style jsx>
      {`
        .chapter-heading {
          $self: &;
          $gutter: 2rem;
          $break-at-md: 50rem; //800px

          &--overlap {
            position: relative;
            z-index: -1; //TODO: workaround for pulling out the lead text

            #{$self}__text {
              @media screen and (min-width: $break-at-md) {
                position: absolute;
                left: 0;
                top: 2rem;
                z-index: 10;
              }
            }

            #{$self}__image {
              @media screen and (min-width: $break-at-md) {
                margin-left: $gutter;
              }
            }

            #{$self}__subtitle {
              @media screen and (min-width: $break-at-md) {
                margin-left: 4rem;
              }
            }
          }

          &__subtitle {
            line-height: 1;
            margin-top: 0.5rem;
            background-color: white;
            display: inline-block;

            @media screen and (min-width: $break-at-md) {
              font-size: 2rem;
            }
          }
        }
      `}
    </style>
  </>
);

ChapterHeading.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.object
};

ChapterHeading.themes = themes;

export default ChapterHeading;
