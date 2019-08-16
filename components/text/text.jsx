import PropTypes from 'prop-types';
import cn from 'classnames';

const themes = {
  body: 'body',
  lead: 'lead',
  small: 'small'
};

const Text = ({ text, theme }) => (
  <>
    <div
      className={cn('text', {
        [`text--${theme}`]: themes[theme]
      })}
    >
      <p className="text__text">{text}</p>
    </div>
    <style jsx>{`
      .text {
        $break-at-sm: 25rem; //400px
        $break-at-md: 50rem; //800px
        $break-at-lg: 64rem; //1024px

        &__text {
          margin: 0;
        }

        &--body {
          font-size: 1rem;
        }

        &--lead {
          font-size: 1rem;
          line-height: 1.5em;

          @media screen and (min-width: $break-at-md) {
            font-size: 1.5rem;
          }
        }

        &--small {
          font-size: 0.8rem;
        }
      }
    `}</style>
  </>
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
