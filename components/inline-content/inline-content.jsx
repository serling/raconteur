import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './inline-content.scss';

const alignments = {
  left: 'left',
  right: 'right'
};

const InlineContent = ({ children, alignment }) => (
  <div
    className={cn('inline-content', {
      [`inline-content--${alignments[alignment]}`]: alignments[alignment]
    })}
  >
    {children}
  </div>
);

InlineContent.propTypes = {
  children: PropTypes.node.isRequired,
  alignment: PropTypes.oneOf(
    Object.keys(alignments).map(key => alignments[key])
  )
};

InlineContent.alignments = alignments;

export default InlineContent;
