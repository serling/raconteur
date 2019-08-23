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
        <div className="poster__wrapper">
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
          {showMeta && credit && (
            <span className="poster__credit">Photo: {credit}</span>
          )}
        </div>
        {showMeta && caption && (
          <div className="poster__text">
            <span className="poster__caption">{caption}</span>
          </div>
        )}
      </div>
      <style jsx>{`
        .poster {
          &__image {
            max-width: 100%;
          }

          &__wrapper {
            position: relative;
            line-height: 0;
          }

          &__text {
            border-bottom: 1px solid #e1dede;
            padding: 0 0.5rem;
          }

          &__caption {
            color: #706f6f;
            font-size: 0.8em;
          }

          &__credit {
            font-size: 0.6rem;
            text-transform: uppercase;
            text-align: right;
            color: white;
            margin: 0.2rem;
            position: absolute;
            right: 0;
            line-height: 1;
            bottom: 0;
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
