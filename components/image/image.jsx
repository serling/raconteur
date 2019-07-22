import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ModalImage from 'react-modal-image';

import Text from '../text/text';
import Icon from '../icon/icon';

import './image.scss';

const Image = ({
  text,
  alt,
  src,
  thumbnailSrc,
  credit,
  className,
  enforceAspectRatio
}) => {
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
        {thumbnailSrc ? (
          <>
            <div className="image__icon">
              <Icon name="expand" />
            </div>
            <ModalImage
              className="image__image"
              hideDownload={true}
              hideZoom={true}
              showRotate={false}
              alt={text || alt}
              small={thumbnailSrc}
              medium={src}
            />
          </>
        ) : (
          <img src={src} alt={alt} className="image__image" />
        )}
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
  thumbnailSrc: PropTypes.string,
  credit: PropTypes.string,
  enforceAspectRatio: PropTypes.bool
};

export default Image;
