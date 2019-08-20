import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { urlFor } from '../../client';

const sizes = {
  preview: {
    height: 350,
    width: 800
  },
  full: {
    width: 1200,
    height: 600
  }
};

const Poster = ({ image, showMeta, isPreview }) => {
  if (!image) return null;

  const { description, credit, caption } = image;

  return (
    <>
      <div className="poster">
        <img
          className="poster__image"
          src={urlFor(image)
            .size(
              isPreview ? sizes.preview.width : sizes.full.width,
              isPreview ? sizes.preview.height : sizes.full.height
            )
            .fit('crop')
            .url()}
          alt={description}
        />
        {showMeta && (
          <div className="poster__text">
            <span className="poster__caption">{caption}</span>
            <span className="poster__credit">{credit}</span>
          </div>
        )}
      </div>
      <style jsx>{`
        .poster {
          &__image {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
};

Poster.propTypes = {
  image: PropTypes.object.isRequired,
  hideMeta: PropTypes.bool
};

Poster.defaultProps = {
  showMeta: false
};

export default Poster;
