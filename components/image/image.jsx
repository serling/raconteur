import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ModalImage from 'react-modal-image';

import Text from '../text/text';
import Icon from '../icon/icon';

// https://github.com/cyrilwanner/next-optimized-images/issues/16
// https://github.com/cyrilwanner/next-optimized-images/issues/63

const themes = {
  centerpiece: 'centerpiece'
};

const Image = ({
  text,
  alt,
  src,
  thumbnailSrc,
  credit,
  theme,
  className,
  enforceAspectRatio
}) => {
  if (!src || !alt) return null;

  return (
    <>
      <figure
        className={cn(
          'image',
          {
            'image--enforce-aspect-ratio': enforceAspectRatio,
            [`image--${themes[theme]}`]: themes[theme]
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
            <>
              <img src={src} alt={alt} className="image__image" />
            </>
          )}
        </div>
        {text && (
          <figcaption className="image__meta">
            <div className="image__meta-content">
              {text && <Text text={text} theme={Text.themes.small} />}
              {credit && <span className="image__credit">{credit}</span>}
            </div>
          </figcaption>
        )}
      </figure>
      <style jsx>
        {`
          .image {
            $self: &;
            $break-at-sm: 25rem; //400px
            $break-at-md: 50rem; //800px
            $break-at-lg: 64rem; //1024px
            $aspect-ratio--sixteen-nine: 56.25%;
            $aspect-ratio--narrow: 30%;

            margin: 0;

            &--enforce-aspect-ratio {
              #{$self}__wrapper {
                height: 0;
                overflow: hidden;
                padding-top: $aspect-ratio--sixteen-nine;
              }

              #{$self}__image {
                width: 100%;
                height: auto;

                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
              }
            }

            &__wrapper {
              position: relative;
            }

            &__image {
              display: block;
              width: 100%;
              height: auto;
            }

            &__icon {
              position: absolute;
              top: 0;
              right: 0;
              z-index: 1;

              background-color: rgba(255, 255, 255, 0.5);
              padding: 0.5rem;
              pointer-events: none;
            }

            &__meta-content {
              font-size: 0.8rem;
              margin-top: 0.25rem;
              padding-bottom: 0.25rem;

              border-bottom: 1px solid #d4d2d2;
            }

            &--centerpiece {
              #{$self}__meta-content {
                @media screen and (min-width: $break-at-sm) {
                  padding-left: 1rem;
                  padding-right: 1rem;
                }
              }

              #{$self}__meta {
                margin: 0 auto;
                max-width: 768px;
              }
            }
          }
        `}
      </style>
    </>
  );
};

Image.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  thumbnailSrc: PropTypes.string,
  credit: PropTypes.string,
  theme: PropTypes.string,
  enforceAspectRatio: PropTypes.bool
};

Image.themes = themes;

export default Image;
