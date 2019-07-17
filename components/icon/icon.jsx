import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './icon.scss';

const sizes = {
  tiny: 'tiny',
  small: 'small',
  medium: 'medium',
  large: 'large'
};

const Icon = ({ className, name, size }) =>
  !name ? null : (
    <div
      className={cn(
        'icon',
        `icon--${name}`,
        {
          [`icon--${sizes[size]}`]: sizes[size]
        },
        className
      )}
    >
      <div />
    </div>
  );

Icon.propTypes = {
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  name: PropTypes.string,
  size: PropTypes.string
};

Icon.defaultProps = {
  size: sizes.small
};

Icon.sizes = sizes;

export default Icon;
