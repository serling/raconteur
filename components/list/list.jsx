import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './list.scss';

const themes = {
  grid: 'grid'
};

const List = ({ isOrdered, isCentered, children, className, theme }) => {
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
        React.Children.map(children, (child, index) => (
          <li key={index} className={cn('list__item', `list__item--${index}`)}>
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
  className: PropTypes.string,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

List.defaultProps = {
  isOrdered: false
};

List.themes = themes;

export default List;
