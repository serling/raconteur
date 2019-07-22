import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Text from '../text/text';

import './quote.scss';

const Quote = ({ text, source, textIsWhite }) => (
  <div
    className={cn('quote', {
      'quote--white': textIsWhite
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
  textIsWhite: PropTypes.bool
};

export default Quote;
