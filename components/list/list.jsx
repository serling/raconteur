import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const themes = {
  grid: 'grid',
  unordered: 'unordered'
};

const gutterSizes = {
  default: 'default',
  small: 'small'
};

const List = ({
  children,
  className,
  isCentered,
  theme,
  numberOfGridColumns,
  gutterSize
}) => {
  return (
    <>
      <ul
        className={cn(
          'list remove-list-styles',
          {
            'list--centered': isCentered,
            [`list--${themes[theme]}`]: themes[theme],
            [`list--gutter-size-${gutterSizes[gutterSize]}`]: gutterSizes[
              gutterSize
            ]
          },
          className
        )}
      >
        {React.Children.map(children, child => (
          <li className="list__item">{child}</li>
        ))}
      </ul>
      <style jsx>
        {`
          .list {
            $self: &;
            $break-at-sm: 25rem; //400px
            $break-at-md: 50rem; //800px
            $break-at-lg: 64rem; //1024px

            &__item {
              margin-top: 1rem;

              @media screen and (min-width: $break-at-sm) {
                flex: 0 0 calc(100% / 2 - 0.5rem);
              }
            }

            &--unordered {
              #{$self}__item {
                &:first-child {
                  margin-top: 0;
                }
              }
            }

            &--centered {
              justify-content: center;
            }

            &--grid {
              @media screen and (min-width: $break-at-sm) {
                display: flex;
                flex-wrap: wrap;
              }
            }

            &--gutter-size-small {
              @media screen and (min-width: $break-at-sm) {
                margin-left: -0.5rem;
                margin-top: -0.5rem;
              }

              #{$self}__item {
                @media screen and (min-width: $break-at-sm) {
                  margin: 0.5rem 0 0 0.5rem;
                }

                @media screen and (min-width: $break-at-md) {
                  flex: 0 0 calc(100% / ${numberOfGridColumns} - 0.5rem);
                }
              }
            }

            &--gutter-size-default {
              @media screen and (min-width: $break-at-sm) {
                margin-left: -2rem;
                margin-top: -2rem;
              }

              #{$self}__item {
                @media screen and (min-width: $break-at-sm) {
                  margin: 2rem 0 0 2rem;
                }

                @media screen and (min-width: $break-at-md) {
                  flex: 0 0 calc(100% / ${numberOfGridColumns} - 2rem);
                }
              }
            }
          }
        `}
      </style>
    </>
  );
};

List.defaultProps = {
  theme: themes.unordered,
  numberOfGridColumns: 3,
  gutterSize: gutterSizes.default
};

List.propTypes = {
  children: PropTypes.node.isRequired,
  isCentered: PropTypes.bool,
  numberOfGridColumns: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  className: PropTypes.string,
  gutterSize: PropTypes.string,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

List.themes = themes;
List.gutterSizes = gutterSizes;

export default List;
