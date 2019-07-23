import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Icon from '../icon/icon';

import './link.scss';

const themes = {
  underlined: 'underlined',
  arrow: 'arrow',
  download: 'download'
};

const Link = ({ text, href, theme, className, children, iconName }) => (
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
