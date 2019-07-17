import PropTypes from 'prop-types';
import cn from 'classnames';

import './text.scss';

const themes = {
  body: 'body',
  lead: 'lead',
  small: 'small',
  label: 'label'
};

const Text = ({ text, theme }) => (
  <div
    className={cn('text', {
      [`text--${theme}`]: themes[theme]
    })}
  >
    <p className="text__text">{text}</p>
  </div>
);

Text.propTypes = {
  text: PropTypes.string.isRequired,
  theme: PropTypes.string
};

Text.defaultProps = {
  theme: themes.body
};

Text.themes = themes;

export default Text;
