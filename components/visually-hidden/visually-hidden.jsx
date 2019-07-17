import React from 'react';
import PropTypes from 'prop-types';

import './visually-hidden.scss';

const VisuallyHidden = ({ children }) =>
  !children ? null : <span className="visually-hidden">{children}</span>;

VisuallyHidden.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default VisuallyHidden;
