import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const themes = {
  grid: 'grid',
  unordered: 'unordered'
};

const List = ({ children, className, isCentered, theme, gridColumns }) => {
  return (
    <>
      <ul
        className={cn(
          'list',
          {
            'list--centered': isCentered,
            [`list--${themes[theme]}`]: themes[theme]
          },
          className
        )}
      >
        {React.Children.map(children, child => (
          <li
            className={cn('list__item')}
            style={{ flex: `0 0 calc(100% / ${gridColumns} - 2rem)` }}
          >
            {child}
          </li>
        ))}
      </ul>
      <style jsx>
        {`
          .list {
            $self: &;
            margin: 0;
            padding: 0;
            list-style: none;

            &__item {
              margin-top: 1rem;
            }

            &--unordered {
              &:first-child {
                margin-top: 0;
              }
            }

            &--centered {
              justify-content: center;
            }

            &--grid {
              display: flex;
              flex-wrap: wrap;
              margin-left: -2rem;
              margin-top: -2rem;

              #{$self}__item {
                margin: 2rem 0 0 2rem;
              }
            }
          }
        `}
      </style>
    </>
  );
};

List.defaultProps = {
  theme: themes.unordered
};

List.propTypes = {
  children: PropTypes.node.isRequired,
  isCentered: PropTypes.bool,
  gridColumns: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  className: PropTypes.string,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

List.themes = themes;

export default List;
