import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Frame from '../frame/frame';

const alignments = {
  left: 'left',
  right: 'right'
};

const themes = {
  frame: 'frame'
};

const InlineContent = ({ children, alignment, theme }) => (
  <>
    <div
      className={cn('inline-content', {
        [`inline-content--aligned-${alignments[alignment]}`]: alignments[
          alignment
        ],
        [`inline-content--${themes[theme]}`]: themes[theme]
      })}
    >
      {theme === themes.frame ? <Frame>{children}</Frame> : children}
    </div>
    <style jsx>
      {`
        .inline-content {
          $self: &;
          $break-at-sm: 25rem; //400px
          $break-at-md: 50rem; //800px
          $break-at-lg: 64rem; //1024px
          $gutter: 2rem;

          margin: $gutter 0;

          &--aligned-left {
            @media screen and (min-width: $break-at-md) {
              float: left;
              width: 60%;
              margin: 0 $gutter 1rem 0;
            }
          }

          &--aligned-right {
            @media screen and (min-width: $break-at-md) {
              float: right;
              width: 60%;
              margin: 0 0 1rem $gutter;
            }
          }
        }
      `}
    </style>
  </>
);

InlineContent.propTypes = {
  children: PropTypes.node.isRequired,
  alignment: PropTypes.oneOf(
    Object.keys(alignments).map(key => alignments[key])
  ),
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

InlineContent.alignments = alignments;
InlineContent.themes = themes;

export default InlineContent;
