import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Icon from '../icon/icon';

const themes = {
  underlined: 'underlined',
  primary: 'primary',
  arrow: 'arrow',
  download: 'download'
};

const Link = ({ text, href, theme, className, children, iconName }) => (
  <>
    <a
      className={cn(
        'link',
        {
          'link--icon': !!iconName,
          [`link--${themes[theme]}`]: themes[theme]
        },
        className
      )}
      href={href}
    >
      <span className="link__text">{children || text}</span>
      {iconName && (
        <span className="link__icon">
          <Icon name={iconName} />
        </span>
      )}
    </a>
    <style jsx>
      {`
        .link {
          $self: &;
          text-decoration: none;
          color: inherit;

          &:hover,
          &:focus {
            outline: initial;
            color: initial;
            text-decoration: none;
          }

          &:focus,
          &:hover {
            color: black;
          }

          &__icon {
            margin-left: 2rem;
          }

          &--icon {
            display: flex;
            align-self: center;
            justify-content: space-between;

            #{$self}__text,
            #{$self}__icon {
              flex: 0 0 auto;
            }

            #{$self}__text {
              text-transform: uppercase;
              font-size: 0.7em;
            }
          }

          &--underlined {
            border-bottom: 1px solid transparent;
            transition: 0.3s border cubic-bezier(0.33, 0, 0.2, 1);
            padding: 0;

            &:focus,
            &:hover {
              border-bottom: 1px solid black;
            }
          }

          &--primary {
            text-decoration: none;
            border-bottom: 1px solid #da0050;
            padding-bottom: 1px;
            color: #da0050;
            text-decoration: none;

            &:hover,
            &:focus {
              border: 0;
              border-color: #a7003d;
              color: #a7003d;
            }

          }

          &--arrow {
            &::after {
              content: '➝';
              margin-left: 0.25em;
            }

            &:focus,
            &:hover {
              border-bottom: 1px solid black;
            }
          }

          &--download {
            border: 1px solid grey;
            padding: 1rem 2rem;
          }
        }
      `}
    </style>
  </>
);

Link.propTypes = {
  text: PropTypes.string,
  IconName: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Link.themes = themes;

export default Link;
