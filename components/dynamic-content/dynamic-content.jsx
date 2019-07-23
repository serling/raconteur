import React from 'react';
import PropTypes from 'prop-types';

import Components from './components';

const components = Components;

const Component = ({ id, name, props }) => {
  const Component = components[name];

  if (!Component) return null;

  return <Component {...props} />;
};

const DynamicContent = ({ components }) => {
  if (!components) return null;

  return components.map(component => (
    <Component key={component.id} {...component} />
  ));
};

Component.propTypes = {
  name: PropTypes.oneOf(Object.keys(components)),
  props: PropTypes.object.isRequired
};

DynamicContent.propTypes = {
  components: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  ).isRequired
};

export default DynamicContent;
