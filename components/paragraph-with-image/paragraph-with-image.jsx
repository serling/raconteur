import React from 'react';
import PropTypes from 'prop-types';

import RichText from '../rich-text/rich-text';
import InlineContent from '../inline-content/inline-content';

const ParagraphWithImage = ({
  string,
  inlineComponents,
  contentIsRight,
  contentHasFrame
}) => (
  <>
    {inlineComponents && (
      <InlineContent
        components={inlineComponents}
        theme={contentHasFrame ? InlineContent.themes.frame : undefined}
        alignment={
          contentIsRight
            ? InlineContent.alignments.right
            : InlineContent.alignments.left
        }
      />
    )}
    <RichText string={string} />
  </>
);

ParagraphWithImage.propTypes = {
  string: PropTypes.string,
  inlineComponents: PropTypes.array,
  contentIsRight: PropTypes.bool,
  contentHasFrame: PropTypes.bool
};

export default ParagraphWithImage;
