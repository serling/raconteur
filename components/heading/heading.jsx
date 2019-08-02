import cn from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const themes = {
  page: 'page',
  bold: 'bold',
  headline: 'headline'
};

const Heading = ({ children, text, className, level, theme }) => {
  const Component = `h${level}`;

  const props = {
    className: cn(
      'heading',
      {
        [`heading--level-${level}`]: !themes[theme],
        [`heading--${themes[theme]}`]: themes[theme]
      },
      className
    )
  };

  return (
    <>
      <Component {...props}>
        <span className="heading__text">{text || children}</span>
      </Component>
      <style jsx>
        {`
          .heading {
            $self: &;
            $break-at-sm: 25rem; //400px
            $break-at-md: 50rem; //800px
            $break-at-lg: 64rem; //1024px

            margin: 0;

            &--level-1 {
              font-size: 2rem;
              line-height: 1.1em;

              @media screen and (min-width: $break-at-md) {
                font-size: 4rem;
              }
            }

            &--level-2 {
              font-size: 2rem;
            }
            &--level-3 {
              font-size: 1rem;
            }
            &--level-4 {
              font-size: 1rem;
            }
            &--level-5 {
              font-size: 1rem;
            }
            &--level-6 {
              font-size: 1rem;
            }

            &--headline {
              font-size: 2rem;
              line-height: 1.1em;
              margin: 1rem 0 0 0;

              @media screen and (min-width: $break-at-md) {
                font-size: 4rem;
                margin: 0;
              }

              #{$self}__text {
                padding-right: 0.5rem;
                background-color: white;
              }
            }
          }
        `}
      </style>
    </>
  );
};

Heading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  text: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Heading.defaultProps = {
  level: 3
};

Heading.themes = themes;

export default Heading;
