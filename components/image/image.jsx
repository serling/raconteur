import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Text from '../text/text';

import './image.scss';

const Image = ({ text, alt, src, credit, className, enforceAspectRatio }) => {
  if (!src) return null;

  return (
    <figure
      className={cn(
        'image',
        {
          'image--enforce-aspect-ratio': enforceAspectRatio
        },
        className
      )}
    >
      <div className="image__wrapper">
        <img src={src} alt={alt || text} className="image__image" />
      </div>
      {text && (
        <figcaption className="image__meta">
          {text && <Text text={text} theme={Text.themes.small} />}
          {credit && <span className="image__credit">{credit}</span>}
        </figcaption>
      )}
    </figure>
  );
};

Image.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  credit: PropTypes.string,
  enforceAspectRatio: PropTypes.bool
};

export default Image;
