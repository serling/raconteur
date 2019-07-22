import React from 'react';
import PropTypes from 'prop-types';

import InlineContent from '../inline-content/inline-content';
import Image from '../image/image';

const InlineImage = ({ image, imageIsRight }) => (
  <InlineContent
    alignment={
      imageIsRight
        ? InlineContent.alignments.right
        : InlineContent.alignments.left
    }
  >
    <Image {...image} enforceAspectRatio={true} />
  </InlineContent>
);

InlineImage.propTypes = {
  image: PropTypes.object,
  imageIsRight: PropTypes.bool
};

export default InlineImage;
