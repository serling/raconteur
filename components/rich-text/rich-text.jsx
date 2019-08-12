import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const themes = {
  lead: 'lead'
};

const RichText = ({ string, className, theme, hasDropCap }) => (
  <>
    <div
      className={cn(
        'rich-text',
        {
          [`rich-text--${themes[theme]}`]: themes[theme],
          'rich-text--dropcap': hasDropCap
        },
        className
      )}
      dangerouslySetInnerHTML={{ __html: string }}
    />
    <style jsx global>
      {`
        .rich-text {
          &--dropcap {
            > p:first-child::first-letter {
              color: #da0050;
              font-size: 2em;
              font-weight: 600;
            }
          }

          ul,
          li {
            list-style: inside dot;
          }

          > * {
            margin-top: 1rem;

            &:first-child {
              margin-top: 0;
            }

            &:last-child {
              margin-bottom: 0;
            }
          }

          h1,
          h2 {
            margin-bottom: 0;
            margin-top: 2rem;

            + * {
              margin-top: 0.5rem;
            }
          }

          h3,
          h4,
          h5,
          h6 {
            margin-bottom: 0;

            + * {
              margin-top: 0.5rem;
            }
          }

          p {
          }

          a {
            text-decoration: none;
            border-bottom: 1px solid #da0050;
            padding-bottom: 1px;
            color: #da0050;
            text-decoration: none;

            &:hover,
            &:focus {
              border: 0;
              border-color: #a7003d;
              color: #a7003d;
            }

            &[href*='//'] {
            }
          }

          iframe {
            margin: 1rem 0;
          }

          &--lead {
            font-size: 1.625rem;
          }
        }
      `}
    </style>
  </>
);

RichText.propTypes = {
  string: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key])),
  className: PropTypes.string,
  hasDropCap: PropTypes.bool
};

RichText.defaultProps = {
  theme: themes.body
};

RichText.themes = themes;

export default RichText;
