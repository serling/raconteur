import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './list.scss';

const themes = {
  grid: 'grid'
};

const List = ({
  isOrdered,
  isCentered,
  children,
  className,
  theme,
  gridColumns
}) => {
  return (
    <>
      {React.createElement(
        isOrdered ? 'ol' : 'ul',
        {
          className: cn(
            'list',
            [`list--${isOrdered ? 'ordered' : 'unordered'}`],
            {
              'list--centered': isCentered,
              [`list--${themes[theme]}`]: themes[theme]
            },
            className
          )
        },
        React.Children.map(children, child => (
          <li
            className={cn('list__item')}
            style={{ flex: `0 0 calc(100% / ${gridColumns} - 2rem)` }} //full width / n columns - gutter
          >
            {child}
          </li>
        ))
      )}
    </>
  );
};

List.propTypes = {
  children: PropTypes.node.isRequired,
  isOrdered: PropTypes.bool,
  isCentered: PropTypes.bool,
  gridColumns: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  className: PropTypes.string,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

List.defaultProps = {
  isOrdered: false
};

List.themes = themes;

export default List;
