import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Colors from './colors';
import Text from '../text/text';

const backgroundColors = Colors;

const themes = {
  bouble: 'bouble'
};

const Quote = ({
  text,
  source,
  textIsWhite,
  showQuoteMark,
  theme,
  backgroundColor
}) => (
  <>
    <div
      className={cn('quote', {
        'quote--white-text': textIsWhite,
        'quote--quotemark': showQuoteMark,
        [`quote--${backgroundColors[backgroundColor]}`]: backgroundColors[
          backgroundColor
        ],
        [`quote--${themes[theme]}`]: themes[theme]
      })}
    >
      <div className="quote__text">
        <Text text={text} theme={Text.themes.lead} />
      </div>
      <div className="quote__source">
        <Text text={source} />
      </div>
    </div>
    <style jsx>
      {`
        .quote {
          $self: &;
          $break-at-sm: 25rem; //400px
          $break-at-md: 50rem; //800px

          &--white-text {
            color: white;
          }

          &--red {
            background-color: #e76a6a;
          }

          &--grey {
            background-color: #c1c1c1;
          }

          &--blue {
            background-color: #5c5ccc;
          }

          &--bouble {
            padding: 2rem;
            border-radius: 1rem;
            position: relative;

            &:after {
              content: '';
              position: absolute;
              bottom: 20px;
              width: 0;
              height: 0;
              border-left: 37px solid transparent;
              border-right: 33px solid transparent;
              border-top: 100px solid #c1c1c1;
              left: -73px;
              transform: rotate(88deg);
            }
          }

          &__source {
            margin-top: 1rem;

            @media screen and (min-width: $break-at-sm) {
              text-align: right;
            }
          }

          &--quotemark {
            #{$self}__text {
              position: relative;

              p {
                &:before {
                  content: '"';
                  display: none;
                  font-size: 4rem;
                  position: absolute;
                  left: -2rem;
                  top: 1rem;

                  @media screen and (min-width: $break-at-md) {
                    display: inline;
                  }
                }
              }
            }
          }
        }
      `}
    </style>
  </>
);

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  textIsWhite: PropTypes.bool,
  showQuoteMark: PropTypes.bool,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key])),
  backgroundColors: PropTypes.oneOf(
    Object.keys(backgroundColors).map(key => backgroundColors[key])
  )
};

Quote.backgroundColors = backgroundColors;
Quote.themes = themes;

export default Quote;
