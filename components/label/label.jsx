import cn from 'classnames';
import PropTypes from 'prop-types';

const themes = {
  primary: 'primary',
  secondary: 'secondary'
};

const Label = ({ text, theme }) => (
  <>
    <div
      className={cn('label', {
        [`label--${themes[theme]}`]: themes[theme]
      })}
    >
      {text}
    </div>
    <style jsx>{`
      .label {
        color: #ffffff;
        background-color: #da0050;
        padding: 0 0.5rem;
        display: inline-block;
        text-transform: uppercase;
        font-size: 0.6rem;
        line-height: 1.5;
      }
    `}</style>
  </>
);

Label.propTypes = {
  text: PropTypes.string.isRequired,
  theme: PropTypes.string
};

Label.themes = themes;

export default Label;
