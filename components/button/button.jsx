import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Icon from '../icon/icon';
import VisuallyHidden from '../visually-hidden/visually-hidden';

import './button.scss';

const themes = {
  colored: 'colored'
};

const types = {
  button: 'button',
  link: 'link',
  submit: 'submit'
};

const elements = {
  [types.button]: 'button',
  [types.link]: 'a',
  [types.submit]: 'button'
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
  type,
  href,
  shouldOpenInNewTab,
  text
}) => {
  const buttonAttributes = href
    ? { href }
    : { disabled, type: types[type] || types.button };
  const element = href ? elements[types.link] : elements[type];
  const targetAttributes =
    href && shouldOpenInNewTab
      ? {
          target: '_blank',
          rel: 'noopener noreferrer'
        }
      : {};

  return React.createElement(
    element,
    Object.assign(
      {
        className: cn(
          'button',
          {
            [`button--${themes[theme]}`]: themes[theme],
            'button--icon': iconName,
            'button--text': !iconName
          },
          className
        ),
        onClick
      },
      buttonAttributes,
      targetAttributes
    ),
    iconName ? (
      <div
        className={cn('button__icon', {
          [`button__icon--${Icon.sizes[iconSize]}`]: Icon.sizes[iconSize]
        })}
      >
        <Icon name={iconName} size={iconSize} />
        <VisuallyHidden>{children || text}</VisuallyHidden>
      </div>
    ) : (
      children || text
    )
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
  type: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  shouldOpenInNewTab: PropTypes.bool,
  text: PropTypes.string
};

Button.defaultProps = {
  type: types.button,
  theme: themes.colored
};

Button.iconSizes = iconSizes;
Button.themes = themes;

export default Button;
