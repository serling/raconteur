import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './rich-text.scss';

const themes = {
  lead: 'lead',
  body: 'body'
};

const RichText = ({ string, className, theme }) => (
  <div
    className={cn(
      'rich-text',
      { [`rich-text--${themes[theme]}`]: themes[theme] },
      className
    )}
    dangerouslySetInnerHTML={{ __html: string }}
  />
);

RichText.propTypes = {
  string: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key])),
  className: PropTypes.string
};

RichText.defaultProps = {
  theme: themes.body
};

RichText.themes = themes;

export default RichText;
