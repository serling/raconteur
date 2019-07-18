import cn from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import './heading.scss';

const themes = {
  page: 'page',
  bold: 'bold',
  headline: 'headline'
};

const Heading = ({ children, text, className, level, theme }) => {
  return React.createElement(
    `h${level}`,
    {
      className: cn(
        'heading',
        {
          [`heading--level-${level}`]: !themes[theme],
          [`heading--${themes[theme]}`]: themes[theme]
        },
        className
      )
    },
    <span className="heading__text">{children || text}</span>
  );
};

Heading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  text: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Heading.defaultProps = {
  level: 3
};

Heading.themes = themes;

export default Heading;
