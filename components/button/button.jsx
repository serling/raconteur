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
  isActive,
  disabled,
  textIsHidden,
  iconName,
  activeIconName,
  iconSize,
  theme,
  text
}) => {
  return (
    <>
      <button
        className={cn(
          'button',
          {
            [`button--${themes[theme]}`]: themes[theme]
          },
          className
        )}
        onClick={onClick}
        disabled={disabled}
      >
        {iconName && (
          <div
            className={cn('button__icon', {
              'button--active': isActive,
              [`button__icon--${Icon.sizes[iconSize]}`]: Icon.sizes[iconSize]
            })}
          >
            {activeIconName && (
              <div className={cn('button__active-icon')}>
                <Icon name={activeIconName} size={iconSize} />
              </div>
            )}
            <div className={cn('button__inactive-icon')}>
              <Icon name={iconName} size={iconSize} />
            </div>
            {textIsHidden && (
              <VisuallyHidden>{children || text}</VisuallyHidden>
            )}
          </div>
        )}
        {!textIsHidden && (
          <span className="button__text">{children || text}</span>
        )}
      </button>
      <style jsx>{`
        .button {
          $self: &;
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

          display: flex;
          align-items: center;

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

          &__active-icon {
            display: none;
          }

          &--active {
            #{$self}__inactive-icon {
              display: none;
            }

            #{$self}__active-icon {
              display: block;
            }
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
            padding: 0.5rem;

            + #{$self}__text {
              margin-right: 0.5rem;
            }
          }

          &__text {
            margin-right: 0.5rem;
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
  text: PropTypes.string,
  textIsHidden: PropTypes.bool
};

Button.iconSizes = iconSizes;
Button.themes = themes;

export default Button;
