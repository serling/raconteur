import React from 'react';
import PropTypes from 'prop-types';

import RichText from '../rich-text/rich-text';
import InlineContent from '../inline-content/inline-content';

const ParagraphWithImage = ({
  content,
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
    <RichText {...content} />
  </>
);

ParagraphWithImage.propTypes = {
  content: PropTypes.object,
  inlineComponents: PropTypes.array,
  contentIsRight: PropTypes.bool,
  contentHasFrame: PropTypes.bool
};

export default ParagraphWithImage;
