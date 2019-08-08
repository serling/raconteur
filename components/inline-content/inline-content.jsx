import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import DynamicContent from '../dynamic-content/dynamic-content';

const alignments = {
  left: 'left',
  right: 'right'
};

const themes = {
  frame: 'frame'
};

const InlineContent = ({ components, alignment, theme }) => (
  <>
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
              width: 50%;
              margin: 0 $gutter 1rem 0;
            }
          }

          &--aligned-right {
            @media screen and (min-width: $break-at-md) {
              float: right;
              width: 50%;
              margin: 0 0 1rem $gutter;
            }
          }

          &--frame {
            #{$self}__inner {
              background-color: lightgrey;
              padding: 1rem;
            }
          }
        }
      `}
    </style>
  </>
);

InlineContent.propTypes = {
  components: PropTypes.array.isRequired,
  alignment: PropTypes.oneOf(
    Object.keys(alignments).map(key => alignments[key])
  ),
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

InlineContent.defaultProps = {
  components: []
};

InlineContent.alignments = alignments;
InlineContent.themes = themes;

export default InlineContent;
