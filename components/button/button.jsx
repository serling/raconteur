import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Icon from '../icon/icon';
import VisuallyHidden from '../visually-hidden/visually-hidden';

const themes = {
  colored: 'colored'
};

const iconSizes = Icon.sizes;

const Button = ({
  children,
  className,
  onClick,
  disabled,
  iconName,
  iconSize,
  theme,
  text
}) => {
  return (
    <>
      <button
        className={cn('button', className)}
        onClick={onClick}
        disabled={disabled}
        theme={theme}
      >
        {iconName && (
          <div
            className={cn('button__icon', {
              [`button__icon--${Icon.sizes[iconSize]}`]: Icon.sizes[iconSize]
            })}
          >
            <Icon name={iconName} size={iconSize} />
            <VisuallyHidden>{children || text}</VisuallyHidden>
          </div>
        )}
        {children || text}
      </button>
      <style jsx>{`
        .button {
          cursor: pointer;
          width: auto;
          height: auto;
          border: 0;
          padding: 0;
          margin: 0;
          text-align: center;
          text-decoration: none;
          transform: translateZ(0);
          background-color: transparent;

          &:hover,
          &:focus {
            text-decoration: none;
          }

          &[disabled] {
            cursor: not-allowed;
          }

          &:focus {
            outline: 1px solid black;
          }

          &--colored {
            background-color: rgb(82, 11, 11);
            color: white;
            padding: 1rem 2rem;

            &:hover,
            &:focus {
              outline: none;
              color: black;
            }
          }

          &--icon {
            display: block;
            background: transparent;
            padding: 0;
          }

          &__icon {
            display: inline-block;
          }
        }
      `}</style>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  iconName: PropTypes.string,
  iconSize: PropTypes.string,
  onClick: PropTypes.func,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key])),
  disabled: PropTypes.bool,
  text: PropTypes.string
};

Button.defaultProps = {
  theme: themes.colored
};

Button.iconSizes = iconSizes;
Button.themes = themes;

export default Button;
