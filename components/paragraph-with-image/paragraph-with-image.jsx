import React from 'react';
import PropTypes from 'prop-types';

import RichText from '../rich-text/rich-text';
import InlineImage from '../inline-image/inline-image';

const ParagraphWithImage = ({ string, image, imageIsRight }) => (
  <>
    {image && <InlineImage image={image} imageIsRight={imageIsRight} />}
    <RichText string={string} />
  </>
);

ParagraphWithImage.propTypes = {
  string: PropTypes.string,
  image: PropTypes.object,
  imageIsRight: PropTypes.bool
};

export default ParagraphWithImage;
