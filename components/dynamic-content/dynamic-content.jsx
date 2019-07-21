import React from 'react';
import PropTypes from 'prop-types';
import anyToKebab from '@creuna/utils/any-to-kebab';
import cn from 'classnames';

import Components from './components';

import './dynamic-content.scss';

const themes = {
  default: 'default'
};

const Component = ({ id, name, props }) => {
  const Component = Components[name];

  if (!Component) return null;

  return (
    <div
      className={cn(
        'component',
        `component--${anyToKebab(name)}`,
        `component--${id}`
      )}
    >
      <Component {...props} />
    </div>
  );
};

Component.propTypes = {
  name: PropTypes.string.isRequired,
  props: PropTypes.object.isRequired
};

const DynamicContent = ({ components, theme }) => {
  if (!components) return null;

  return (
    <div
      className={cn('dynamic-content', {
        [`dynamic-content--${themes[theme]}`]: themes[theme]
      })}
    >
      {components.map((component, index) => {
        return (
          <div
            key={component.id}
            className={cn('dynamic-content__component', [
              `dynamic-content__component--${index}`
            ])}
          >
            <Component {...component} />
          </div>
        );
      })}
    </div>
  );
};

DynamicContent.propTypes = {
  components: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  ).isRequired
};

DynamicContent.defaultProps = {
  theme: themes.default
};

DynamicContent.themes = themes;

export default DynamicContent;
