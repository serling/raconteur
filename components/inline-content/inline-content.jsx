import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import DynamicContent from '../dynamic-content/dynamic-content';

import './inline-content.scss';

const alignments = {
  left: 'left',
  right: 'right'
};

const themes = {
  frame: 'frame'
};

const InlineContent = ({ components, alignment, theme }) => (
  <div
    className={cn('inline-content', {
      [`inline-content--aligned-${alignments[alignment]}`]: alignments[
        alignment
      ],
      [`inline-content--${themes[theme]}`]: themes[theme]
    })}
  >
    <div className="inline-content__inner">
      <DynamicContent components={components} />
    </div>
  </div>
);

InlineContent.propTypes = {
  components: PropTypes.array.isRequired,
  alignment: PropTypes.oneOf(
    Object.keys(alignments).map(key => alignments[key])
  ),
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

InlineContent.alignments = alignments;
InlineContent.themes = themes;

export default InlineContent;
