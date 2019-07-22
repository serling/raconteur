import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Colors from './colors';
import Text from '../text/text';

import './quote.scss';

const backgroundColors = Colors;

const themes = {
  bouble: 'bouble'
};

const Quote = ({
  text,
  source,
  textIsWhite,
  showQuoteMark,
  theme,
  backgroundColor
}) => (
  <div
    className={cn('quote', {
      'quote--white-text': textIsWhite,
      'quote--quotemark': showQuoteMark,
      [`quote--${backgroundColors[backgroundColor]}`]: backgroundColors[
        backgroundColor
      ],
      [`quote--${themes[theme]}`]: themes[theme]
    })}
  >
    <div className="quote__text">
      <Text text={text} theme={Text.themes.lead} />
    </div>
    <div className="quote__source">
      <Text text={source} />
    </div>
  </div>
);

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  textIsWhite: PropTypes.bool,
  showQuoteMark: PropTypes.bool,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key])),
  backgroundColors: PropTypes.oneOf(
    Object.keys(backgroundColors).map(key => backgroundColors[key])
  )
};

Quote.backgroundColors = backgroundColors;
Quote.themes = themes;

export default Quote;
