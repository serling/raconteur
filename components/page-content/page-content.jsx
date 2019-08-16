import cn from 'classnames';
import PropTypes from 'prop-types';

import Colors from '../quote/colors';

const themes = {
  full: 'full',
  wide: 'wide',
  normal: 'normal',
  narrow: 'narrow'
};

const margins = {
  default: 'default',
  small: 'small',
  none: 'none'
};

const colors = Colors;

const PageContent = ({ theme, margin, children, backgroundColor, backgroundImageHref, className }) => (
  <>
    <div
      className={cn('page-content', {
        [`page-content--${themes[theme]}`]: themes[theme],
        [`page-content--margins-${margins[margin]}`]: margins[margin],
        [`page-content--${colors[backgroundColor]}`]: colors[backgroundColor],
        'page-content--background': !!colors[backgroundColor],
        'page-content--background-image': backgroundImageHref
      }, className)}
    >
      <div className="page-content__inner">{children}</div>
    </div>
    <style jsx>
      {`
        .page-content {
          $self: &;
          max-width: 100%;

          &--margins-default {
            + #{$self} {
              margin-top: 2rem;
            }
          }

          &--margins-small {
            + #{$self} {
              margin-top: 1rem;
            }
          }

          &--margins-none {
            + #{$self} {
              margin-top: 0;
            }
          }

          &--full {
            margin: 0 auto;

            > #{$self} {
              max-width: 100%;
            }
          }

          &--wide {
            > #{$self}__inner {
              max-width: 1240px;
            }
          }

          &--normal {
            > #{$self}__inner {
              max-width: 980px;
            }
          }

          &--narrow {
            > #{$self}__inner {
              max-width: 768px;
            }
          }

          &--background-image {
            background-size: cover;
            background: linear-gradient(90deg, rgba(0,0,0,1) 33%, rgba(0,0,0,0.5) 100%, rgba(255,255,255,1) 100%), url(${backgroundImageHref}) right center no-repeat;
          }

          &--background {
            padding: 2rem 0;
          }

          &--red {
            background-color: #e76a6a;
          }

          
          &--black {
            background-color: #000000;
          }

          &--grey {
            background-color: #c1c1c1;
          }

          &--blue {
            background-color: #5c5ccc;
          }

          &__inner {
            margin: 0 auto;
            padding: 0 1rem;
            position: relative;
          }
        }
      `}
    </style>
  </>
);

PageContent.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.oneOf(Object.keys(colors).map(key => colors[key])),
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key])),
  margins: PropTypes.oneOf(Object.keys(margins).map(key => margins[key])),
  className: PropTypes.string
};

PageContent.defaultProps = {
  theme: themes.normal,
  margin: margins.default
};

PageContent.themes = themes;
PageContent.colors = colors;
PageContent.margins = margins;

export default PageContent;
