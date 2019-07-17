import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './list.scss';

const List = ({ isOrdered, children, className }) => {
  return (
    <>
      {React.createElement(
        isOrdered ? 'ol' : 'ul',
        {
          className: cn(
            'list',
            [`list--${isOrdered ? 'ordered' : 'unordered'}`],
            className
          )
        },
        children
      )}
    </>
  );
};

List.propTypes = {
  children: PropTypes.node.isRequired,
  isOrdered: PropTypes.bool,
  className: PropTypes.string
};

List.defaultProps = {
  isOrdered: false
};

export default List;
