import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './link.scss';

const themes = {
  underlined: 'underlined',
  arrow: 'arrow'
};

const Link = ({ text, href, theme, className, children }) => (
  <a
    className={cn('link', { [`link--${theme}`]: themes[theme] }, className)}
    href={href}
  >
    {children || text}
  </a>
);

Link.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Link.themes = themes;

export default Link;
